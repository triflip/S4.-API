
import { getChuckJoke } from "./chuckSaysApi";

export interface Joke {
  id: string;
  joke: string;
}

import { fetchData } from "../logic/fetcher"; 

export const getDadJoke = async (): Promise<Joke> => {
  const data = await fetchData<{ id: string; joke: string }>(
    "https://icanhazdadjoke.com/"
  );

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
