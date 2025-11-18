
import { rateJoke } from "./logic/jokeRating";
import { getRandomJoke } from "./api/jokesApi";
import { getCurrentPosition } from "./logic/geolocation";
import { updateWeatherUi } from "./logic/weatherDisplay";


const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherText = document.getElementById("weather-text") as HTMLSpanElement;
const weatherLocation = document.getElementById("weather-location") as HTMLSpanElement;


const jokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;
const jokeOutput = document.getElementById("output") as HTMLDivElement;
let actualJoke = "";



const showJoke = async () => {
  try {
    const joke = await getRandomJoke();
    jokeOutput.textContent = joke.joke;
    actualJoke = joke.joke;
  } catch (error) {
    console.error("Error loading the joke:", error);
    jokeOutput.textContent = "Sorry...the joke couldn't be loaded 😢";
    jokeOutput.classList.add("error-message");
  }
};
jokeBtn.addEventListener("click", showJoke);

(async () => {
  await showJoke();
})();

const scoreButtons = document.querySelectorAll<HTMLButtonElement>("#score-buttons button");

scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const score = Number(button.dataset.score);
    if (!actualJoke) {
      return;
    }
    rateJoke(actualJoke, score);
  });
});

const weatherError = document.getElementById("weather-error") as HTMLDivElement;

try {
  const { lat, lon } = await getCurrentPosition();
  await updateWeatherUi(lat, lon, weatherIcon, weatherText, weatherLocation);
   weatherError.textContent = "";
} catch (error) {
  console.error("Error gettin location", error)
   weatherError.textContent = "The weather\ncan't be loaded";
   weatherError.classList.add("error-message");
}