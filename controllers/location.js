const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise
});

module.exports = {
  closeLocations: async (ctx) => {
    let { request: { query: { locations } } } = ctx;

    // ToDo add proper validation
    if (!Array.isArray(locations)) {
      locations = JSON.parse(locations);
    }

    const joined = locations.join('|');

    const result = await googleMapsClient.distanceMatrix({
      origins: joined,
      destinations: joined
    }).asPromise();

    const res = [];

    if (result.status === 200) {
      for (let i = 0; i < result.json.rows.length; i += 1) {
        const closest = result.json.rows[i].elements.map((m, index) => ({ ...m, index })).filter(f => f.status === 'OK' && f.distance.value > 0).sort((a, b) => a.distance.value - b.distance.value);
        if (closest.length > 0) {
          res.push({ addr1: locations[i], addr2: locations[closest[0].index], distance: closest[0].distance.value })
        }
      }
    }

    ctx.body = res;
  }
};
