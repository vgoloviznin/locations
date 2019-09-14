const Router = require('koa-router');
const { location } = require('../controllers');

const router = new Router();

router.get('/close', location.closeLocations);

module.exports = router;
