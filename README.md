# 🌤️😄 Jokes & Weather App 
A front-end application built with **TypeScript** and **Vite** that displays **random jokes**, **current weather**, and **sunrise/sunset times** using multiple external APIs. 
Styled with **pure CSS** and enhanced with simple animations for a fun and responsive user experience.

---

## 🚀 Features
- **Jokes API** — fetch random jokes with an interactive button. 
- **Rating system** — rate jokes using emojis (🤔, 🤭, 🤣). 
- **Weather API** — get live weather based on your location. 
- **SunTime API** — display sunrise and sunset times. 
- **UI/UX polish** — custom `@keyframes` animations.

---

## 🛠️ Technologies Used
- **Vite** — bundler and development server 
- **TypeScript** — logic and type safety 
- **CSS** — styling and animations 
- **External APIs**:
  - **ICanHazDadJoke** — https://icanhazdadjoke.com/ 
  - **Chuck Norris Jokes** — https://api.chucknorris.io/jokes/random 
  - **Nominatim** (OpenStreetMap) — geocoding (city → latitude/longitude) 
  - **Open-Meteo** — current weather data and sunrise and sunset times

---

## 🌐 API Details

### **1. ICanHazDadJoke**
Random general-purpose jokes.

**Endpoint**
GET https://icanhazdadjoke.com/


**Required header**
Accept: application/json


---

### **2. Chuck Norris Jokes API**
Random Chuck Norris–themed jokes.

**Endpoint**
GET https://api.chucknorris.io/jokes/random


---

### **3. Nominatim (OpenStreetMap)**
Converts a user’s city into latitude/longitude coordinates.

**Example**
https://nominatim.openstreetmap.org/search?q=${city}&format=json


---

### **4. Open-Meteo Weather API**
Provides current weather (temperature, wind speed, etc.).

**Endpoint used**
https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true


---

### **5. SunTime API**
Gets sunrise and sunset times based on coordinates.

**Endpoint used**
https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset&timezone=auto



---

## 📂 Project Structure

<pre> ```text S4-API/ ├─ index.html # Root HTML file (entry point for Vite) ├─ README.md # Project documentation ├─ package.json # Dependencies and scripts ├─ package-lock.json # Dependency lock file ├─ tsconfig.json # TypeScript configuration ├─ tsconfig.app.json # App-specific TypeScript config ├─ vite.config.js # Vite configuration (proxy, build, etc.) ├─ eslint.config.js # ESLint configuration ├─ .gitignore # Git ignore rules ├─ public/ # Static assets served directly │ └─ vite.svg # Vite logo or static asset ├─ node_modules/ # Installed dependencies (auto-generated) ├─ test/ # Vitest testing files │ ├─ jokeRanking.test.ts # Unit tests for joke ranking logic │ └─ weatherApi.test.ts # Unit tests for weather API └─ src/ ├─ assets/ # Images and backgrounds ├─ api/ # API modules (weatherApi.ts, jokesApi.ts...) ├─ logic/ # Business logic │ └─ jokeRanking.ts # Handles joke rating logic │ └─ weatherdisplay.ts # Render weather │ └─ geolocation.ts # Get current position ├─ utils/ # Utility helpers │ └─ weather-icons.ts # Maps weather codes to icons ├─ main.ts # Application entry point └─ styles.css # Global styles ``` </pre>



---

## ⚙️ Installation
```bash
# Clone the repository
git clone [https://github.com/triflip/S4-API.git](https://github.com/triflip/S4-API.git)

cd S4-API
npm install
npm run dev
🧪 Testing
The app uses Vitest to validate:

API modules (weatherApi, sunTimeApi)

Joke rating logic (jokeRating)

Utility functions and UI components

Run tests:

Bash

npx vitest