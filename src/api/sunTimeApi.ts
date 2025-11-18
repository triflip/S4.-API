import { fetchData } from "../logic/fetcher";

interface SunTimeResponse {
    daily: {
        sunrise: string[];
        sunset: string[];
    };
}

export async function getSunTime(lat: number, lon: number): Promise<{sunrise: string; sunset: string}> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset&timezone=auto`;
    const data = await fetchData(url) as SunTimeResponse;

    return {
        sunrise: data.daily.sunrise[0],
        sunset: data.daily.sunset[0]
    };
} 