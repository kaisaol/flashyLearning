import express from "express";
import { getBruker } from "../mysql/mysqlQueries";

const app = express();

app.listen(3000);

app.get("/bruker", async (req, res) => {
  const brukerID = req.query.ID;
  const bruker = getBruker(brukerID);
  console.log(bruker);
});
