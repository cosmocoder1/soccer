const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/soccer',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("error securing db connection ", err);
    } else {
      console.log("db connection success");
    }
  }
);

const seasonSchema = new mongoose.Schema({
  rankings: Array
});

const Season = mongoose.model('Season', seasonSchema);

module.exports.Season = Season;