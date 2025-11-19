import { getRandomJoke } from "../api/jokesApi";
import { rateJoke } from "./jokeRating";

export function initJokeUi(
  jokeBtn: HTMLButtonElement,
  scoreButtons: NodeListOf<HTMLButtonElement>,
  output: HTMLDivElement
) {
  let actualJoke = "";

  const showError = (output: HTMLDivElement, message: string) => {
    output.textContent = message;
    output.classList.add("error-message");
  };

  const showJoke = async () => {
    try {
      const joke = await getRandomJoke();
      output.textContent = joke.joke;
      actualJoke = joke.joke;
    } catch {
      showError(output, "Sorry...the joke couldn't be loaded 😢");
    }
  };

  jokeBtn.addEventListener("click", showJoke);

  scoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const score = Number(button.dataset.score);
      if (actualJoke) {
        try {
          rateJoke(actualJoke, score);
          output.textContent = "Thanks for your rating!";
        } catch {
          showError(output, "Could not submit your rating.");
        }
      }
    });
  });

  showJoke();
}
