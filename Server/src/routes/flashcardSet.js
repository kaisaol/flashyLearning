import express from "express";
import { getFlashcardSet, addFlashcardSet, updateFlashcardSet} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const setID = req.query.ID;
  const set = await getFlashcardSet(setID);
  res.send(set);
});

router.get("/add", async (req, res) => {
  const data = req.query.row;
  const set = await addFlashcardSet(data);
  res.send(set);
});

router.get("/update", async (req, res) => {
  const data = req.query.row;
  const ID = req.query.SetID
  const set = await updateFlashcardSet(ID,data);
  res.send(set);
});

export default router;