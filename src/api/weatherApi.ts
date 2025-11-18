import { fetchData } from "../logic/fetcher";

export interface WeatherResult {
  temperature: number;
  weathercode: number;
  locationName: string;
}

export const getWeather = async (lat: number, lon: number): Promise<WeatherResult> => {
  
  const weatherData = await fetchData<{ current_weather: { temperature: number; weathercode: number } }>(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

 
  let locationName = "Unknow location 🤷";
  try {
    const geoData = await fetchData<{ address?: { city?: string; town?: string; village?: string; county?: string } }>(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const address = geoData.address || {};
    locationName =
      address.city ||
      address.town ||
      address.village ||
      address.county ||
      "Unknow location 🤷";
  } catch (error) {
   
    console.warn("Geo API failed, using fallback:", error);
  }


  return {
    temperature: weatherData.current_weather.temperature,
    weathercode: weatherData.current_weather.weathercode,
    locationName,
  };
};
