import { getWeather } from "./api/weatherApi";
import { getWeatherIcon} from "./utils/weather-icons";
import { rateJoke } from "./logic/jokeRating";
import { getRandomJoke } from "./api/jokesApi";
import { getSunTime } from "./api/sunTimeApi";


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
    jokeOutput.textContent = "The joke couldn't be loaded 😢";
  }
};
jokeBtn.addEventListener("click", showJoke);

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


navigator.geolocation.getCurrentPosition(
  async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const { temperature, weathercode, locationName } = await getWeather(lat, lon);
    const { sunrise, sunset } = await getSunTime((lat), (lon));

    const now = new Date().getTime();
    const sunriseTime = new Date(sunrise).getTime();
    const sunsetTime = new Date(sunset).getTime();

    const isNight = now < sunriseTime || now > sunsetTime;

    weatherIcon.src = getWeatherIcon(weathercode, isNight);
    weatherText.textContent = `${temperature}°C`;
    weatherLocation.textContent = locationName;

  },
  (error) => {
    console.error("Error getting location", error);
  }
);
