var express = require('express');
var router = express.Router();
var userRoutes  = require('./user.routes.js');
var searchRoutes  = require('./search.routes.js');

router.use('/user', userRoutes);
router.use('/search', searchRoutes);


module.exports = router;