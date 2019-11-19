const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

quotes = [
  '"Perfect is the enemy of good." <br> –Voltaire',
  '"I’m still learning." <br> –Michelangelo',
  '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
  '"Be curious, not judgmental." <br> –Walt Whitman',
  '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
  '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
  '"Nothing will work unless you do." <br> –Maya Angelou',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
  '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
  '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
  '"A learning curve is essential to growth." <br> –Tammy Bjelland'
];

function getRandomQuote() {
  index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("index"));

app.get("/quotes", (req, res) => res.send(quotes));

app.get("/randomQuote", (req, res) => res.send(getRandomQuote()));

app.get("/quotes/:index", (req, res) => {
  let index = parseInt(req.params.index);
  if (index >= quotes.length || index < 1) {
    res.send({
      error: `Choose a number between 1 and ${quotes.length}`
    });
  } else {
    res.send(quotes[index - 1]);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));