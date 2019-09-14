# Locations app

Gets closest locations from the given array of locations provided in the API call. The app utilizes [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/intro) so the API support the data formats of the Matrix API.

## Installation

- clone the repo
- run `npm i` to install all dependencies
- run tests with `npm run test`
- make sure you have a `.env` file of the following format

```
PORT=3001
GOOGLE_API_KEY=SOME-GOOOGLE-KEY
```

## Running the app

Run the app by `node app` or `npm start`