import express from "express";
import { updateFlashcardSet } from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const data = req.query.row;
  const ID = req.query.SetID
  const set = await updateFlashcardSet(ID,data);
  res.send(set);
});

export default router;