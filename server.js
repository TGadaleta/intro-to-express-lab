//Imports and need arrays
import express from "express";
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

//index route
app.get(`/`, (req, res) => {
  res.send(`<h1>Express is working`);
});

//Exercise 1
app.get("/greetings/:name", (req, res) => {
  res.send(`<h1>Why, hello there ${req.params.name}.</h1>`);
});

//Exercise 2
app.get("/roll/:dice", (req, res) => {
  let dice = Number(req.params.dice);
  res.send(
    `<p>You rolled a ${Math.ceil(Math.random() * dice)} on a d${dice}.<p>`
  );
});

//Exercise 3
app.get(`/collectibles/:item`, (req, res) => {
  if (collectibles[req.params.item]) {
    let name = collectibles[req.params.item].name;
    let price = collectibles[req.params.item].price;
    res.send(`<p>I can sell you the ${name}. It'll cost you $${price}.`);
  } else res.send(`<p>This item is not yet in stock. Check back soon.<p>`);
});

//Exercise 4
app.get(`/shoes`, (req, res) => {
  const { minPrice, maxPrice, type } = req.query;
  let filterShoes = shoes;
  if (type) {
    filterShoes = filterShoes.filter((shoe) => shoe.type === type);
  }
  if (minPrice) {
    filterShoes = filterShoes.filter((shoe) => shoe.price >= minPrice);
  }
  if (maxPrice) {
    filterShoes = filterShoes.filter((shoe) => shoe.price <= maxPrice);
  }
  let response = `<h2>Filtered Shoes:<h2><ol>`; //Chat-GPT
  filterShoes.forEach((shoe) => {
    response += `<li><strong>Name:<strong> ${shoe.name}, <strong>Price:<strong> ${shoe.price}, <strong>Type:<strong> ${shoe.type}`;
  });
  response += `<ol>`;
  res.send(response);
});

//Server Listener
app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
