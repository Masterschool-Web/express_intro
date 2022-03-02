const characters = require("./characters.json");
const express = require("express");

const app = express();

const PORT = 3000;

// h1, h2, h3, h4. h5, h6 - titles
// p (span)
// <p>david is a <span>developer</span></p>
// div

const injectIntoHTML = (html, title) => {
  return `
  <html>
    <head><title>${title}</title></head>
    <body>
    <h1>${title}</h1>
      ${html}
    </body>
  </html>
`;
};

const cardStyle =
  "background-color: #333; color: white; padding: 20px; margin-bottom: 8px; border-radius: 8px";
const imgStyle = "width: 25%";

app.get("/", (req, res) => {
  const cards = characters.map(
    (char) =>
      `
      <div style="${cardStyle}">
        <h2>${char.name}</h2>
        <p>blood: ${char.blood}</p>
        <p>species: ${char.species}</p>
        <p>born: ${char.born}</p>
        <p>quote: ${char.quote}</p>
        <img src=${char.imgUrl} style="${imgStyle}"/>
      </div>
    `
  );

  const html = injectIntoHTML(cards.join(""), "characters");

  res.send(html);
});

app.get("/characters/:id", (req, res) => {
  const character = characters.find((character) => {
    return character.id === Number(req.params.id);
  });

  // DRY
  // Don't repeat yourself

  const { name, blood, species, born, quote, imgUrl } = character;

  const card = `
  <div style="${cardStyle}">
    <h2>${name}</h2>
    <p>blood: ${blood}</p>
    <p>species: ${species}</p>
    <p>born: ${born}</p>
    <p>quote: ${quote}</p>
    <img src=${imgUrl} style="${imgStyle}"/>
  </div>
  `;

  const html = injectIntoHTML(card, character.name);

  res.send(html);
});

app.get("/characters/species/:species", (req, res) => {
  const filteredcharacters = characters
    .filter((character) => {
      return (
        character.species.toLowerCase() === req.params.species.toLowerCase()
      );
    })
    .map(
      (char) =>
        `
      <div style="${cardStyle}">
        <h2>${char.name}</h2>
        <p>blood: ${char.blood}</p>
        <p>species: ${char.species}</p>
        <p>born: ${char.born}</p>
        <p>quote: ${char.quote}</p>
        <img src=${char.imgUrl} style="${imgStyle}"/>
      </div>
    `
    );

  let html;

  if (filteredcharacters.length === 0) {
    html = injectIntoHTML(
      `Something went wrong, ${req.params.species} is not a correct species`,
      "error"
    );
  } else {
    html = injectIntoHTML(
      filteredcharacters.join(""),
      req.params.species + "s"
    );
  }

  res.send(html);
});

app.listen(PORT, () => console.log(`listening to port: ${3000}`));

// "id"
// "name"
// "blood"
// "species"
// "patronus"
// "born"
// "quote"
// "imgUrl"
