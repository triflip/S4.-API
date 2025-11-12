import { getWeather } from "./api/weatherApi";
import { weatherIcons } from "./utils/weather-icons";

const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherText = document.getElementById("weather-text") as HTMLSpanElement;
const weatherLocation = document.getElementById("weather-location") as HTMLSpanElement;

navigator.geolocation.getCurrentPosition(
  async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("User location:", lat, lon);

    const { temperature, weathercode, locationName } = await getWeather(lat, lon);

    weatherIcon.src = weatherIcons[weathercode] || weatherIcons[3];
    weatherText.textContent = `${temperature}°C`;
    weatherLocation.textContent = locationName;
  },
  (error) => {
    console.error("Error getting location", error);
  }
);
