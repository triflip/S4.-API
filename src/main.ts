import { initJokeUi } from "./logic/jokeUi";
import { getCurrentPosition } from "./logic/geolocation";
import { updateWeatherUi } from "./logic/weatherDisplay";

const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherText = document.getElementById("weather-text") as HTMLSpanElement;
const weatherLocation = document.getElementById("weather-location") as HTMLSpanElement;
const weatherError = document.getElementById("weather-error") as HTMLDivElement;

const jokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;
const jokeOutput = document.getElementById("output") as HTMLDivElement;
const scoreButtons = document.querySelectorAll<HTMLButtonElement>("#score-buttons button");

initJokeUi(jokeBtn, scoreButtons, jokeOutput);


try {
  const { lat, lon } = await getCurrentPosition();
  await updateWeatherUi(lat, lon, weatherIcon, weatherText, weatherLocation);
  weatherError.textContent = "";
} catch (error) {
  console.error("Error getting location", error);
  weatherError.textContent = "The weather\ncan't be loaded";
  weatherError.classList.add("error-message");
}
