const express = require('express');
const app = express();
const port = 1234;

// db controllers
const { addSeason } = require('./db/controllers/addSeason.js');
const { getSeasons } = require('./db/controllers/getSeasons.js');

app.use(express.static('public'));

app.listen(port, () => {
  console.log('serving on 1234')
});

app.post('./seasons', (req, res) => {
  const season = req.body.season;
  addSeason(season)
  .then(response => console.log(response));
})

app.get('./seasons', (req, res) => {
  getSeasons
  .then(season => res.send(season));
})

