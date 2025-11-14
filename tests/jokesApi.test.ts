/// <reference types="vitest" />


import { test, expect } from "vitest";
import {getRandomJoke} from "../src/api/jokesApi";

test("getRandomJoke returns an object in the 'joke' field", async () => { 

    const joke = await getRandomJoke();
    expect(joke).toHaveProperty("joke");
    expect( typeof joke.joke).toBe("string");
});
