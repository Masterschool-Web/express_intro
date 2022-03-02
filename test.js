const characters = require("./characters.json");
const express = require("express");
const res = require("express/lib/response");

const app = express();

const PORT = 3000;

app.get("/", (request, response) => res.send("hello world"));

app.get("/users/:name/:lastname", (req, res) =>
  res.send(`hello ${req.params.name} ${req.params.lastname}`)
);

app.get("/page/:name", (req, res) =>
  res.send(`
    <html>
        <body>
            <h1 style="color: red">Hi ${req.params.name}</h1>
            <p style="color: green">We've been watching you</p>
            <p style="font-size: 8px">follow the rabbit</p>
        </body>
    </html>
`)
);

const injectIntoHtml = (html, title) => {
  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
      <h1>${title}</h1>
        ${html}
      </body>
    </html>
  `;
};

const cardStyle =
  "display: flex; flex-direction: column; padding: 20px; margin-bottom: 10px; background-color: #333; color: white";

const imageStyle = "width: 25%";

app.get("/characters", (req, res) => {
  const cards = characters.map(
    (char) => `
  <div style="${cardStyle}">
  <h1>${char.name}</h1>
  <p>blood: ${char.blood}</p>
  <p>species: ${char.species}</p>
  <img src=${char.imgUrl} style="${imageStyle}"/>
  </div>`
  );

  res.send(injectIntoHtml(cards.join(""), "characters"));
});

app.listen(PORT, () => console.log(`listening to port: ${3000}`));
