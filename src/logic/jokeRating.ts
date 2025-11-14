type JokeReport = {
  joke: string;
  score: number;
  date: string;
};

export const reportJoke: JokeReport[] = [];

export const rateJoke = (joke: string, score: number) => {
    const date = new Date().toISOString();
    const existing = reportJoke.find((item) => item.joke === joke);

    if(existing) {
      existing.score = score;
      existing.date = date;
    } else { 
    const report: JokeReport = { joke, score, date };
  reportJoke.push(report);
}
console.log("Report:", reportJoke);
};
