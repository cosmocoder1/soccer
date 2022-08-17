const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/soccer');

const seasonSchema = new mongoose.Schema({
  rankings: Array
});

const Season = mongoose.model('Season', seasonSchema);

module.exports.Season = Season;