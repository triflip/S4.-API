import { getRandomJoke } from "./api/jokesApi";

const btn = document.getElementById("jokeBtn") as HTMLButtonElement | null;
const renderOutput = document.getElementById("output") as HTMLElement | null;

const showJoke = async () => {
    const joke = await getRandomJoke();
    if (renderOutput) {
        renderOutput.textContent = joke.joke;
    }
}

if (btn) {
    btn.addEventListener("click", showJoke);
}