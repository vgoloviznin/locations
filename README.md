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

Run the app by `node app` or `npm start`. 

Swagger API specification is available in the repository. You can test the route by running the following request in your browser after starting the app: 

`https://vgoloviznin-location.herokuapp.com/locations/close?locations=[%22Statue%20Of%20Liberty%22,%20%22Washington%20DC%22,%22Golden%20Bridge%22,%20%22Oklahoma%22,%20%22New%20Orleans%22]`

