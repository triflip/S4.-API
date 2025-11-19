import { getCurrentPosition } from "./geolocation";
import { updateWeatherUi } from "./weatherDisplay";

export async function initWeatherUi(
  weatherIcon: HTMLImageElement,
  weatherText: HTMLSpanElement,
  weatherLocation: HTMLSpanElement,
  weatherError: HTMLDivElement
) {
  try {
    const { lat, lon } = await getCurrentPosition();
    await updateWeatherUi(lat, lon, weatherIcon, weatherText, weatherLocation);
    weatherError.textContent = "";
  } catch (error) {
    console.error("Error getting location", error);
    weatherError.textContent = "The weather\ncan't be loaded";
    weatherError.classList.add("error-message");
  }
}
