import express from "express";
import { getFlashcardSet } from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const setID = req.query.ID;
  const set = await getFlashcardSet(setID);
  res.send(set);
});

export default router;