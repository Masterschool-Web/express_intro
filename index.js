const characters = require("./characters.json");
const express = require("express");

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
