import express from "express";
import { testRouter } from "./routes/test.js";

const app = express();

app.use("/test", testRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
