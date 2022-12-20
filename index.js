import express from "express";
import { testRouter } from "./routes/test.js";
import {characterRouter} from "./routes/characters.js";
import {externalRouter} from "./routes/external.js";

const app = express();

app.use("/test", testRouter);
app.use("/characters", characterRouter);
app.use("/external", externalRouter)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
