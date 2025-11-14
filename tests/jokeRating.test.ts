
import { rateJoke, reportJoke } from "../src/logic/jokeRating";
import { describe, test, expect, beforeEach, vi } from "vitest";

beforeEach(() => {
    reportJoke.length = 0;
});

test("adds a new report with joke and punctuation", () => {
    rateJoke("Test joke", 2);

    expect(reportJoke.length).toBe(1);
    expect(reportJoke[0].joke).toBe("Test joke");
    expect(reportJoke[0].score).toBe(2);
    expect(typeof reportJoke[0].date).toBe("string");
});

test("update score if joke already exist", () => {
  rateJoke("Repeated joke", 1);
  rateJoke("Repeated joke", 3);

  expect(reportJoke.length).toBe(1);
  expect(reportJoke[0].score).toBe(3);
});

test("show the report to console", () => {
    const spy = vi.spyOn(console, "log");

    rateJoke("Visible joke", 2);
    expect(spy).toHaveBeenCalledWith("Report:", reportJoke)

    spy.mockRestore();
});