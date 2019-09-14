const { array } = require('../helpers');

module.exports = {
  closeLocations: (ctx) => {
    let { request: { query: { locations } } } = ctx;

    // ToDo add proper validation
    if (!Array.isArray(locations)) {
      locations = JSON.parse(locations);
    }

    const pairs = array.pairs(locations);

    ctx.body = pairs;
  }
};
