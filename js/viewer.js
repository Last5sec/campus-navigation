// === Select DOM Elements ===
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const markers = document.querySelectorAll('.marker');

const infoBox = document.getElementById('info-box');
const infoImg = document.getElementById('info-img');
const infoTitle = document.getElementById('info-title');
const infoDescription = document.getElementById('info-description');
const closeBtn = document.querySelector('.close-btn');
const navigateBtn = document.getElementById('navigate-btn');
const backToStreetBtn = document.getElementById('back-to-street');

// === Info Data ===
const infoData = [
  {
    name: "LHC",
    image: "img/info box/lhc.jpg",
    description: "The Lecture Hall Complex (LHC) hosts lectures, seminars, and academic activities for students and faculty."
  },
  {
    name: "Mess & Canteen",
    image: "img/info box/Mess.jpg",
    description: "The Mess & Canteen provides dining services with a variety of affordable meals and snacks."
  },
  {
    name: "R&D Block",
    image: "img/info box/rnd.png",
    description: "The Research and Development (R&D) Block is dedicated to innovation, research labs, and faculty offices."
  },
  {
    name: "Sports Block",
    image: "img/sportsblock.jpg",
    description: "The Sports Block includes facilities for indoor sports, fitness training, and recreation."
  },
  {
    name: "Old Academic Block",
    image: "img/info box/old academic.jpg",
    description: "The Old Academic Block houses early classrooms, faculty rooms, and administrative offices."
  },
  {
    name: "Library",
    image: "img/info box/library.jpg",
    description: "The Library is a central hub for academic resources, research, and quiet study."
  },
  {
    name: "Girls Hostel",
    image: "img/info box/girls hostel.jpg",
    description: "The Girls Hostel provides comfortable accommodation for female students."
  },
  {
    name: "Old Boys Hostel",
    image: "img/info box/old boys.jpg",
    description: "The Old Boys Hostel offers accommodation for male students."
  },
  {
    name: "H1 Hostel",
    image: "img/info box/H1 hostel.jpg",
    description: "The H1 Hostel offers accommodation for male students."
  },
  {
    name: "H2 Hostel",
    image: "img/info box/H2 hostel.jpg",
    description: "The H2 Hostel offers accommodation for male students."
  },
  {
    name: "Guest House",
    image: "img/info box/guest house.jpg",
    description: "The Guest House provides accommodation for visiting faculty, guests, and staff."
  },
  {
    name: "Anuj Grover Sir",
    image: "img/info box/A610.jpg",
    description: "A610 is a faculty office of Anuj Grover Sir"

  },

];

// === Current State ===
let currentIndex = 0;
let isInNavigation = false;
let currentPath = [];
let pathIndex = 0;

// 🔄 Change slide
function changeSlide(direction) {
  if (isInNavigation) {
    pathIndex = (pathIndex + direction + currentPath.length) % currentPath.length;
    currentIndex = currentPath[pathIndex];
  } else {
    currentIndex = (currentIndex + direction + slideElements.length) % slideElements.length;
  }
  updateSlide();
}

// 🔄 Update slide view
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  updateActiveMarker();
}

// 🎯 Highlight active marker
function updateActiveMarker() {
  markers.forEach((marker, index) => {
    marker.classList.toggle('active', index === currentIndex);
  });
}

// ℹ️ Show info box by name
function showInfoBoxByName(name) {
  const data = infoData.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (!data) {
    alert(`No information available for "${name}"`);
    return;
  }
  infoImg.src = data.image;
  infoTitle.textContent = data.name;
  infoDescription.textContent = data.description;
  infoBox.classList.remove('hidden');
}

// ❌ Close info box
closeBtn.addEventListener('click', () => {
  infoBox.classList.add('hidden');
});

// 🎯 Marker click handling
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const name = marker.getAttribute('data-name');
    showInfoBoxByName(name);
  });

  marker.addEventListener('mouseenter', () => {
    marker.classList.add('active');
  });

  marker.addEventListener('mouseleave', () => {
    marker.classList.remove('active');
  });
});

// 🧭 Navigate button
navigateBtn.addEventListener('click', () => {
  const destination = infoTitle.textContent;
  window.location.href = `streetview/index.html?destination=${encodeURIComponent(destination)}`;
});

// 🗺️ Start navigation (optional in home)
function startNavigation(destination) {
  const path = PATH_MAP[destination]; // Using PATH_MAP from path.js
  if (!path) {
    alert(`No path defined for ${destination}`);
    return;
  }
  isInNavigation = true;
  currentPath = path;
  pathIndex = 0;
  currentIndex = path[0];
  updateSlide();
  backToStreetBtn.classList.remove('hidden');
}

// 🔙 Exit navigation
backToStreetBtn?.addEventListener('click', () => {
  isInNavigation = false;
  currentPath = [];
  pathIndex = 0;
  backToStreetBtn.classList.add('hidden');
  updateSlide();
});

// === Loader Handling ===
function hideLoader() {
  document.body.classList.add('loaded');
}

window.addEventListener('load', hideLoader);

setTimeout(() => {
  if (!document.body.classList.contains('loaded')) {
    console.warn('Loader timeout triggered!');
    hideLoader();
  }
}, 6000);

// === Search and Suggestions ===

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchContainer = document.querySelector('.search-container');

// Create suggestion box
const suggestionBox = document.createElement('div');
suggestionBox.classList.add('suggestion-box');
searchContainer.appendChild(suggestionBox);

// List of locations for search
const searchLocations = infoData.map(loc => loc.name);

// Listen to input for suggestions
searchInput.addEventListener('input', () => {
  const input = searchInput.value.trim();
  suggestionBox.innerHTML = '';

  if (input.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  const filtered = searchLocations.filter(name =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  if (filtered.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  filtered.forEach(name => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = name;
    div.addEventListener('click', () => {
      searchInput.value = name;
      suggestionBox.style.display = 'none';
      handleSearchSelection(name);
    });
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = 'block';
});

// 🔍 Search Button Click
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    handleSearchSelection(query);
  }
});

// 🔥 Function to handle search result
function handleSearchSelection(destination) {
  showInfoBoxByName(destination);
}

