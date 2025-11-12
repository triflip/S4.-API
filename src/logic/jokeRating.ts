type JokeReport = {
  joke: string;
  score: number;
  date: string;
};

const reportAcudits: JokeReport[] = [];

export const rateJoke = (joke: string, score: number) => {
    const date = new Date().toISOString();
    const report: JokeReport = { joke, score, date };
  reportAcudits.push(report);
  console.log("reportAcudits:", reportAcudits);
};
