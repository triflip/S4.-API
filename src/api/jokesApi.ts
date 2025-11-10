export interface Joke {
    id: string;
    joke: string;
}

export const getRandomJoke = async (): Promise<Joke> =>{
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        },
    });

    if(!response.ok) {
        throw new Error("Couldn't get the joke");
    }

    const data = await response.json();
    return {
        id: data.id,
        joke: data.joke,
    };
}; 
