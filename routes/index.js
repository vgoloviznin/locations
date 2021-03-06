const Router = require('koa-router');
const location = require('./location');

const router = new Router();

router.use('/locations', location.routes());

module.exports = router;
