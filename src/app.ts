import express from "express";
import cors from "cors";
import quotes from "./data/quotes";

const app = express();

app.use(cors({ origin: "*" }));

const port = 3001;

app.get("/quotes/random", (_, res) => {
  console.log('called random quotes')

  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomQuoteIndex];

  res.send(randomQuote);
});

app.get("/quotes", (_, res) => {
  res.send(quotes);  
});

app.listen(port, (): void => {
   console.log(`server is listening on the port ${port}`);
   return;
});
