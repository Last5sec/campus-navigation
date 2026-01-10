# campus-navigation
# 🎓 Campus 360 – Virtual Campus Navigation System

Campus 360 is an interactive **360° virtual tour and navigation system** for a university campus built using **Marzipano** and modern JavaScript. It allows users to explore the campus in immersive panoramas, search for locations, view information hotspots, and follow guided navigation paths just like a real-world walkthrough.

This project is designed to help **new students, visitors, and staff** easily understand campus layout and find destinations virtually.

---

## 🚀 Features

### 🗺️ 360° Virtual Tour
- Immersive panorama scenes powered by **Marzipano**.
- Smooth transitions using clickable hotspots.

### 🔍 Smart Search
- Search any building or location by name.
- Displays details using info panels.
- Real-time filtering of results.

### 🧭 Guided Navigation (Path Mode)
- Navigate using predefined routes stored in `path.js`.
- Only **forward scenes** are accessible.
- Previously visited scenes are disabled for one-way guided navigation.
- Optional **target yaw** automatically orients the camera toward the next scene.

### 📍 Info Hotspots
- Clickable information points for buildings and important locations.

### 📱 Mobile Friendly
- Fully responsive design.
- Can be opened directly on phones.
- Supports access via **QR codes**.

### 🔄 UI Controls
- Loader screen
- Fullscreen toggle
- Autorotation
- Scene list navigation

---

## 🛠️ Tech Stack

- **JavaScript (Vanilla)**
- **Marzipano** – 360° panorama viewer
- **HTML5 / CSS3**
- **GitHub Pages** – Hosting

---

## 📁 Project Structure

campus-360/
│
├── index.html
├── viewer.js # Main panorama logic
├── path.js # Navigation paths (PATH_MAP)
├── img/ # Icons, info images, UI assets
├── tiles/ # 360° image tiles for scenes
└── streetview/
└── index.html # Street navigation view


---

## 🧭 How Navigation Works

1. The user selects or searches for a destination.
2. The system checks the corresponding path in `PATH_MAP`.
3. Only scenes in that path are loaded.
4. Backward navigation is disabled.
5. If a `targetYaw` is defined, the camera automatically faces the next direction.

This ensures a **controlled and realistic navigation flow** similar to walking on campus.

---

## 📱 How to Run

### ▶ Run online
https://last5sec.github.io/campus-navigation/


Built-in loading screen.

Fullscreen toggle, autorotation, and scene list.
