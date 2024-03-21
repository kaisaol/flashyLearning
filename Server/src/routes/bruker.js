import express from "express";
import {
  addBruker,
  getBruker,
  getBrukerByName,
  getBrukerSet,
  getAllFlashcardSet,
  getAlleBrukere,
  updateAdmin,
  removeBruker,
  getPopulereSet,
} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  const brukerID = req.query.ID;
  const bruker = await getBruker(brukerID);
  res.send(bruker);
});

router.get("/mySets", async (req, res) => {
  console.log(req.query);
  const brukerID = req.query.ID;
  const brukerSets = await getBrukerSet(brukerID);
  res.send(brukerSets);
});

router.get("/popularSets", async (req, res) => {
  const popularSets = await getPopulereSet();
  res.send(popularSets);
});

router.get("/allSets", async (req, res) => {
  console.log(req.query);
  const flashcardSets = await getAllFlashcardSet();
  res.send(flashcardSets);
});

router.post("/signup", async (req, res) => {
  const nyBruker = req.body;
  const brukernavn = nyBruker.brukernavn;
  const passord = nyBruker.passord;

  if (brukernavn === undefined || passord === undefined) {
    res.send({});
    return;
  }

  const finnesBruker = await getBrukerByName(brukernavn);
  if (finnesBruker.length > 0) {
    res.send({});
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

router.get("/allUsers", async (req, res) => {
  const brukere = await getAlleBrukere();
  res.send(brukere);
});

router.post("/changeAdmin", async (req, res) => {
  const bruker = req.body;
  const brukerID = bruker.ID;
  const admin = bruker.Admin;
  updateAdmin(brukerID, admin);
  res.send(true);
});

router.delete("/deleteUser", async (req, res) => {
  const brukerID = req.query.ID;
  console.log(brukerID);
  removeBruker(brukerID);
  res.send(true);
});

export default router;
