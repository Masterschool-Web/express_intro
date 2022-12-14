import express from "express";

const router = express.Router();

const app = express();

// GET POST UPDATE (PATCH/PUT) DELETE
// GET

// router.get(endpoint, function)
// endpoint google.com/search => /search
// endpoint default google.com/ => /

router.get("/", (request, response) => {
  // request => read the request of the client
  // read params /users/search => users, search
  // read queries /users?name=david => query => name, value => david
  // read body => this is later
  // read headers (authentication) => this is much later

  response.send("Hello World");
});

// HTTP
// GET
// localhost:5000
// /user
// ?name=david&&age=35

// CRUD - CREATE READ UPDATE     DELETE
// HTTP - POST   GET  PUT/PATCH  DELETE

router.get("/welcome/:name", (req, res) => {
  const { name } = req.params;

  res.send(`Welcome ${name}`);
});

// 200, 201, 202... success ✅
// 300... location was found // rarely used
// 400... error -> client went wrong -> something wrong with the req
// 500... error -> server went wrong -> somethign wrong with the res

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

app.use("/", router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
