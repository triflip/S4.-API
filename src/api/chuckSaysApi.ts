import { fetchData } from "../logic/fetcher";

export interface Joke {
  id: string;
  joke: string;
}

export const getChuckJoke = async (): Promise<Joke> => {
  const data = await fetchData<{ id: string; value: string }>(
    "https://api.chucknorris.io/jokes/random"
  );

  return {
    id: data.id ?? "chuck",  
    joke: data.value,         
  };
};
