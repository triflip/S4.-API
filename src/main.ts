import { getRandomJoke } from "./api/jokesApi";

const jokeCont= document.getElementById("joke");
const btn = document.getElementById("jokeBtn") as HTMLButtonElement | null;

const showJoke = async () => {
    const joke = await getRandomJoke();
    if (jokeCont) {
        jokeCont.textContent = joke.joke;
    }
}

if (btn) {
    btn.addEventListener("click", showJoke);
}