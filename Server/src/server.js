/**
import express from "express";
import cors from "cors";
import { getAllBruker } from "./mysql/mysqlQueries.js";

const brukere = getAllBruker();

setInterval(() => {
  console.log(brukere);
}, 1000);
*/
import express from "express";
import { getBruker } from "./mysql/mysqlQueries.js";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(3000);

app.get("/bruker", async (req, res) => {
  const brukerID = req.query.ID;
  console.log(brukerID);
  const bruker = await getBruker(brukerID);
  console.log(bruker);
  res.send(bruker);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

