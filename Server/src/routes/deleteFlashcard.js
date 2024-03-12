import express from "express";
import { removeFlashcardSet } from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.delete("/delete", async (req, res) => {
  const setID = req.query.setID;
  console.log(setID)
    await removeFlashcardSet(setID);
  res.send(true);
});

export default router;