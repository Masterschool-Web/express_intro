import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (request, response) => {
  console.log("get /");

  response.status(200).send({
    name: "david",
    age: 35,
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("Request has been made");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
