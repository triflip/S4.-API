
export function getCurrentPosition(): Promise<{ lat: number, lon: number}> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => reject(error)
        );
    });
}