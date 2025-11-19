import { initJokeUi } from "./logic/jokeUi";
import { getCurrentPosition } from "./logic/geolocation";
import { updateWeatherUi } from "./logic/weatherDisplay";
import { initWeatherUi } from "./logic/weatherInit";

const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherText = document.getElementById("weather-text") as HTMLSpanElement;
const weatherLocation = document.getElementById("weather-location") as HTMLSpanElement;
const weatherError = document.getElementById("weather-error") as HTMLDivElement;

const jokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;
const jokeOutput = document.getElementById("output") as HTMLDivElement;
const scoreButtons = document.querySelectorAll<HTMLButtonElement>("#score-buttons button");

initJokeUi(jokeBtn, scoreButtons, jokeOutput);

initWeatherUi(weatherIcon, weatherText, weatherLocation, weatherError);
