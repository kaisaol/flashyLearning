import express from "express";
import { getFlashcardSet, addFlashcardSet, removeFlashcardSet, updateFlashcardSet, addLikeSet, getLikeCount} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const setID = req.query.ID;
  const set = await getFlashcardSet(setID);
  res.send(set);
});

router.post("/add", async (req, res) => {
  const data = req.body;
  console.log(data);
  await addFlashcardSet(data.row,data.userID);
  res.send(true);
});

router.post("/update", async (req, res) => {
  const data = req.query.row;
  const ID = req.query.SetID
  await updateFlashcardSet(ID,data);
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