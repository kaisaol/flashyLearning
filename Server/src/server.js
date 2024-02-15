import express from "express";
import cors from "cors";
import brukerRouter from "./routes/bruker.js";

const app = express();
app.use(cors());

app.use("/bruker", brukerRouter);

app.listen(3000);
