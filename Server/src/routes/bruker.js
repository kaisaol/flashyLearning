import express from "express";
import { getBruker } from "../mysql/mysqlQueries.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const brukerID = req.query.ID;
  const bruker = await getBruker(brukerID);
  res.send(bruker);
});

export default router;