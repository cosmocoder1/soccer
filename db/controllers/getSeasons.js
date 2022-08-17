const { Season } = require('../index.js');

const getSeasons = () => {
  return Season.find({});
}

module.exports.getSeasons = getSeasons;