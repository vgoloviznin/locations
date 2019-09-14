const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise
});

module.exports = {
  distances: locations => googleMapsClient.distanceMatrix({
    origins: locations,
    destinations: locations
  }).asPromise()
};
