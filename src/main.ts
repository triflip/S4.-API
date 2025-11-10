import { getRandomJoke } from "./api/jokesApi";

const showJoke = async () => {
    const joke = await getRandomJoke();
    console.log("Joke:", joke.joke);
}

showJoke();