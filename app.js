require('dotenv').config();

const Koa = require('koa');
const body = require('koa-bodyparser');

const routes = require('./routes');
const { notFound } = require('./middleware');

const PORT = process.env.PORT || 3001;

const app = new Koa();

app.use(body());

app.use(routes.routes());

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
