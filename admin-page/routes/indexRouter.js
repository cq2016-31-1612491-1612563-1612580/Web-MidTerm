var express = require('express');
var router = express.Router();
const homeControllers = require('../controllers/homeController');

router.get('/', homeControllers.home);
module.exports = router;
