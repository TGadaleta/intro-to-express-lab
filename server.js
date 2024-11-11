import express from 'express'
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get(`/`, (req,res) => {
    res.send(`<h1>Express is working`);
})

app.get('/greetings/:name', (req,res) => {
    res.send(`<h1>Why, hello there ${req.params.name}.</h1>`)
})

app.get('/roll/:dice', (req, res) => {
    let dice =  Number(req.params.dice);
    res.send(`<p>You rolled a ${Math.ceil(Math.random()*dice)} on a d${dice}.<p>`)
})

app.get(`/collectibles/:item`, (req, res) => {
    if (collectibles[req.params.item]){
        let name = collectibles[req.params.item].name;
        let price = collectibles[req.params.item].price;
        res.send(`<p>I can sell you the ${name}. It'll cost you $${price}.`);
    }
    else res.send(`<p>This item is not yet in stock. Check back soon.<p>`);
})




app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
})