import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello World");
});

router.get("/welcome/:name", (req, res) => {
  const { name } = req.params;

  res.send(`Welcome ${name}`);
});

router.get("/user", (req, res) => {
  const { name, age } = req.query;

  if (!name && !age) {
    return res.status(400).send("Fu*k off, you are not even trying");
  }

  // if error
  if (!name) {
    res.status(400).send("Name is required");
    return;
  }

  // if error
  if (!age) {
    res.status(400).send("Age is required");
    return;
  }

  res.status(200).send(`${name} is ${age} years old`);
});

export { router as testRouter };
