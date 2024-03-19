import express from "express";
import { getFlashcardSet, addFlashcardSet, removeFlashcardSet, updateFlashcardSet, addLikeSet, getLikeCount} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const setID = req.query.ID;
  const svar = await getFlashcardSet(setID);
  res.send(svar);
});

router.post("/add", async (req, res) => {
  const data = req.body;
  await addFlashcardSet(data.row,data.userID);
  res.send(true);
});

router.post("/update", async (req, res) => {
  const data = req.body;
  await updateFlashcardSet(data.SetID,data.row);
  res.send(true);
});

router.post("/delete", async (req, res) => {
  const setID = req.body.ID;
  await removeFlashcardSet(setID);
  res.send(true);
});

router.post("/like", async (req, res) => {
  const setID = req.body.setID;
  await addLikeSet(setID);
  res.send(true);
});

router.get("/getLikes", async (req, res) => {
  const setID = req.query.setID;
  const set = await getLikeCount(setID);
  res.send(set);
});

export default router;