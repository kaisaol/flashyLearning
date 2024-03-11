import express from "express";
import cors from "cors";
import brukerRouter from "./routes/bruker.js";
import setRouter from "./routes/flashcardSet.js";
import deleteFlashcardRouter from "./routes/deleteFlashcard.js";

const app = express();
app.use(cors());
app.use(express.json());
/*
app.use("/bruker", brukerRouter);*/
app.use("/flashcardSet", setRouter)
app.use("/flashcard", deleteFlashcardRouter);
app.use("/bruker", brukerRouter);

app.listen(3000);
