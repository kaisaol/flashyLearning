import express from "express";
import { addFlashcardSet } from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const data = req.query.ID;
  const set = await addFlashcardSet(data);
  res.send(set);
});

export default router;