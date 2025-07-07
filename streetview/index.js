'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var data = window.APP_DATA;
  var screenfull = window.screenfull;

  // ✅ Get destination from URL
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get('destination');

  const filteredScenesData = (destination && PATH_MAP[destination])
    ? data.scenes.filter(scene => PATH_MAP[destination].includes(scene.id))
    : data.scenes;

  const allowedSceneIds = filteredScenesData.map(scene => scene.id);

  // DOM elements
  const panoElement = document.querySelector('#pano');
  const sceneNameElement = document.querySelector('#titleBar .sceneName');
  const sceneListElement = document.querySelector('#sceneList');
  const sceneListToggleElement = document.querySelector('#sceneListToggle');
  const autorotateToggleElement = document.querySelector('#autorotateToggle');
  const fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Viewer
  const viewer = new Marzipano.Viewer(panoElement, {
    controls: { mouseViewMode: data.settings.mouseViewMode }
  });

  // 🔥 Create scenes
  const scenes = filteredScenesData.map(function(sceneData) {
    const urlPrefix = "tiles";
    const source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + sceneData.id + "/preview.jpg" }
    );
    const geometry = new Marzipano.CubeGeometry(sceneData.levels);
    const limiter = Marzipano.RectilinearView.limit.traditional(sceneData.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    const view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);

    const scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // ✅ Link hotspots with destination restriction and one-way path logic
    sceneData.linkHotspots.forEach(function(hotspot) {
      const targetAllowed = allowedSceneIds.includes(hotspot.target);

      if (!targetAllowed) return;

      // ✅ In navigation mode: prevent going backward
      if (destination) {
        const currentIndex = PATH_MAP[destination].indexOf(sceneData.id);
        const targetIndex = PATH_MAP[destination].indexOf(hotspot.target);

        if (targetIndex < currentIndex) {
          return; // 🔥 Skip backward link
        }
      }

      const element = createLinkHotspotElement(hotspot);
      if (element) {
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      }
    });

    // Info hotspots
    sceneData.infoHotspots.forEach(function(hotspot) {
      const element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: sceneData,
      scene: scene,
      view: view
    };
  });

  // 🔥 Autorotate
  const autorotate = Marzipano.autorotate({
    yawSpeed: 0.08,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // 🔥 Fullscreen
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', () => {
      screenfull.toggle();
    });
    screenfull.on('change', () => {
      fullscreenToggleElement.classList.toggle('enabled', screenfull.isFullscreen);
    });
  }

  // 🔥 Scene List
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  if (sceneListElement) {
    sceneListElement.innerHTML = '';
    filteredScenesData.forEach(sceneData => {
      const el = document.createElement('div');
      el.className = 'scene';
      el.dataset.id = sceneData.id;
      el.innerText = sceneData.name;
      el.addEventListener('click', () => {
        const target = findSceneById(sceneData.id);
        switchScene(target);
        if (document.body.classList.contains('mobile')) {
          hideSceneList();
        }
      });
      sceneListElement.appendChild(el);
    });
  }

  // 🔥 View Controls
  const controls = viewer.controls();
  const velocity = 0.7;
  const friction = 3;
  controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewUp'), 'y', -velocity, friction), true);
  controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewDown'), 'y', velocity, friction), true);
  controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewLeft'), 'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewRight'), 'x', velocity, friction), true);
  controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewIn'), 'zoom', -velocity, friction), true);
  controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewOut'), 'zoom', velocity, friction), true);

  // 🔥 Scene Switching
  function switchScene(scene, targetYaw) {
    stopAutorotate();
    const viewParams = { ...scene.data.initialViewParameters };
    if (typeof targetYaw === 'number') {
      viewParams.yaw = targetYaw;
    }
    scene.view.setParameters(viewParams);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    const elements = document.querySelectorAll('#sceneList .scene');
    elements.forEach(el => {
      el.classList.toggle('current', el.dataset.id === scene.data.id);
    });
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) return;
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  // 🔥 Hotspot Creators with Defensive Checks
  function createLinkHotspotElement(hotspot) {
    const targetSceneData = findSceneDataById(hotspot.target);
    if (!targetSceneData) {
      console.warn(`Target scene "${hotspot.target}" not found.`);
      return null;
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('hotspot', 'link-hotspot');

    const icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    ['-ms-transform', '-webkit-transform', 'transform'].forEach(prop => {
      icon.style[prop] = `rotate(${hotspot.rotation}rad)`;
    });

    wrapper.appendChild(icon);

    const tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip', 'link-hotspot-tooltip');
    tooltip.innerHTML = targetSceneData.name;

    // wrapper.appendChild(tooltip);

    wrapper.addEventListener('click', () => {
      const targetScene = findSceneById(hotspot.target);
      if (targetScene) {
        switchScene(targetScene, hotspot.targetYaw);
      }
    });

    stopTouchAndScrollEventPropagation(wrapper);
    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('hotspot', 'info-hotspot');

    const header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    const icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    const title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    const closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    const closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    const text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    wrapper.appendChild(header);
    wrapper.appendChild(text);

    const modal = document.createElement('div');
    modal.classList.add('info-hotspot-modal');
    modal.innerHTML = wrapper.innerHTML;
    document.body.appendChild(modal);

    function toggle() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    }

    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    stopTouchAndScrollEventPropagation(wrapper);
    return wrapper;
  }

  function stopTouchAndScrollEventPropagation(element) {
    ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel', 'mousewheel'].forEach(event => {
      element.addEventListener(event, e => e.stopPropagation());
    });
  }

  function findSceneById(id) {
    return scenes.find(scene => scene.data.id === id);
  }

  function findSceneDataById(id) {
    return filteredScenesData.find(scene => scene.id === id);
  }

  function sanitize(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 🔥 Start first scene
  switchScene(scenes[0]);

})();
