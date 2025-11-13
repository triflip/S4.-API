import { getChuckJoke } from "./chuckSaysApi";

export interface Joke {
  id: string;
  joke: string;
}

export const getDadJoke = async (): Promise<Joke> => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Couldn't get the joke");
  }

  const data = await response.json();
  return {
    id: data.id,
    joke: data.joke,
  };
};

export const getRandomJoke = async (): Promise<Joke> => {
  const random = Math.random();

  if (random < 0.5) {
    return await getDadJoke();
  } else {
    const chuck = await getChuckJoke();
    return {
      id: "chuck",
      joke: chuck.joke,
    };
  }
};
