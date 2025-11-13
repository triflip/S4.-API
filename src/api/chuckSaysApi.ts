
export const getChuckJoke = async (): Promise<{joke:string}> => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return{joke: data.value};
};