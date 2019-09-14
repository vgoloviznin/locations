const { array } = require('../helpers');

module.exports = {
  closeLocations: (ctx) => {
    const { request: { query: locations } } = ctx;

    const pairs = array.pairs(locations);

    ctx.body = pairs;
  }
};
