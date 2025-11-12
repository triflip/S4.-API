export async function getWeather(lat: number, lon: number): Promise<{
  temperature: number;
  weathercode: number;
  locationName: string;
}> {
  
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  const data = await response.json();

  
  const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
  const geoData = await geoResponse.json();

  
  const locationName =
    geoData.address.city ||
    geoData.address.town ||
    geoData.address.village ||
    geoData.address.county ||
    "Unknow location 🤦‍♂️";

  return {
    temperature: data.current_weather.temperature,
    weathercode: data.current_weather.weathercode,
    locationName
  };
}
