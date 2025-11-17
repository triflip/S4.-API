
export async function getSunTime(lat: number , lon: number): Promise<{sunrise: string; sunset: number}> {
    const url =  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset&timezone=auto`;
    const response =  await fetch(url);
    const data = await response.json();

    return{
        sunrise: data.daily.sunrise[0],
        sunset: data.daily.sunset[0]
    };
} 