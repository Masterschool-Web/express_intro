import express from "express";
import { testRouter } from "./routes/test.js";
import {characterRouter} from "./routes/characters.js";

const app = express();

app.use("/test", testRouter);
app.use("/characters", characterRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
