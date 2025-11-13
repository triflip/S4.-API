type JokeReport = {
  joke: string;
  score: number;
  date: string;
};

const reportJoke: JokeReport[] = [];

export const rateJoke = (joke: string, score: number) => {
    const date = new Date().toISOString();
    const report: JokeReport = { joke, score, date };
  reportJoke.push(report);
  console.log("Report:", report);
};
