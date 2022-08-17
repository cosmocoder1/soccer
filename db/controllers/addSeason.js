const { Season } = require('../index.js');

const addSeason = (season) => {
  const newSeason = new Season({
    rankings: season
  });
  return newSeason.save();
}

module.exports.addSeason = addSeason;