const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise
});

module.exports = {
  closeLocations: async (locations) => {
    const joined = locations.join('|');

    const distances = await googleMapsClient.distanceMatrix({
      origins: joined,
      destinations: joined
    }).asPromise();

    const result = [];

    if (distances.status === 200) {
      for (let i = 0; i < distances.json.rows.length; i += 1) {
        const closest = distances.json.rows[i].elements.map((m, index) => ({ ...m, index })).filter(f => f.status === 'OK' && f.distance.value > 0).sort((a, b) => a.distance.value - b.distance.value);
        if (closest.length > 0) {
          result.push({ location: locations[i], closest: locations[closest[0].index] });
        }
      }
    }

    return result;
  }
};
