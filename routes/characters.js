import express from "express";
const router = express.Router();
import characters from "../characters.json" assert { type: "json" };

router.get("/", (req, res) => {
  res.send(characters);
});

router.get("/:id", (req, res) => {
  res.send(characters.find((c) => c.id === parseInt(req.params.id)));
});

export { router as characterRouter };
