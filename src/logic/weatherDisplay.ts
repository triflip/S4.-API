import { getWeather } from "../api/weatherApi";
import { getSunTime } from "../api/sunTimeApi"; 
import { getWeatherIcon } from "../utils/weather-icons";

export async function updateWeatherUi(lat: number, lon: number , weatherIcon: HTMLImageElement , weatherText: HTMLSpanElement, weatherLocation: HTMLSpanElement) {
    const { temperature, weathercode, locationName } = await getWeather(lat, lon);
    const { sunrise, sunset } = await getSunTime(lat, lon);

    const now = new Date().getTime();
        const sunriseTime = new Date(sunrise).getTime();
        const sunsetTime = new Date(sunset).getTime();
        const isNight = now < sunriseTime || now > sunsetTime;
    
        weatherIcon.src = getWeatherIcon(weathercode, isNight);
        weatherText.textContent = `${temperature}°C`;
        weatherLocation.textContent = locationName;
}