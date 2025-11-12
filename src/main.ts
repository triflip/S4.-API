import { getRandomJoke } from "./api/jokesApi";
import { rateJoke } from "./logic/jokeRating";

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

const scoreButtons = document.querySelectorAll("#score-buttons button");

scoreButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const score = parseInt(btn.getAttribute("data-score") || "0");
        const jokeText = renderOutput?.textContent || "";
        if (jokeText && score) {
            rateJoke(jokeText, score);
        }
    });
});

