import express from "express";
// import { router } from "../routes/characters";
import { characterRouter } from "./routes/characters.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("log");
  res.send("welcome to character serve");
});
app.use("/characters", characterRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
