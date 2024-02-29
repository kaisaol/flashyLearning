import express from "express";
import {
  addBruker,
  getBruker,
  getBrukerByName,
} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  const brukerID = req.query.ID;
  const bruker = await getBruker(brukerID);
  res.send(bruker);
});

router.post("/signup", async (req, res) => {
  const nyBruker = req.body;
  const brukernavn = nyBruker.brukernavn;
  const passord = nyBruker.passord;

  if (brukernavn === undefined || passord === undefined) {
    res.send(undefined);
    return;
  }

  const finnesBruker = await getBrukerByName(brukernavn);
  if (finnesBruker.length > 0) {
    res.send(undefined);
    return;
  }

  addBruker([brukernavn, passord, 0]);
  const bruker = await getBrukerByName(brukernavn);
  res.send(bruker);
});

router.get("/login", async (req, res) => {
  const bruker = req.query;
  const brukernavn = bruker.brukernavn;
  const passord = bruker.passord;

  const finnesBruker = await getBrukerByName(brukernavn);
  if (finnesBruker.length === 0) {
    res.send(undefined);
    return;
  }

  if (finnesBruker[0].Passord !== passord) {
    res.send(undefined);
    return;
  }

  console.log(finnesBruker[0]);
  res.send(finnesBruker[0]);
});

export default router;
