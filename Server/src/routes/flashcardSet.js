import express from "express";
import {
  getFlashcardSet,
  addFlashcardSet,
  removeFlashcardSet,
  updateFlashcardSet,
  addLikeSet,
  getLikeCount,
} from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const setID = req.query.ID;
  const svar = await getFlashcardSet(setID);
  res.send(svar);
});

router.post("/add", async (req, res) => {
  const data = req.body;
  console.log(data);
  await addFlashcardSet(data.row, data.userID);
  res.send(true);
});

router.post("/update", async (req, res) => {
  const data = JSON.stringify(req.body.data);
  const ID = req.body.SetID;
  console.log(data);
  await updateFlashcardSet(ID, data);
  res.send(true);
});

router.delete("/delete", async (req, res) => {
  const setID = req.query.setID;
  console.log(setID);
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
