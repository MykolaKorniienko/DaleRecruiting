var express = require('express');
var router = express.Router();
var search = require('../controllers/search.controller.js');
 
router.post('', search.searchUser);
router.get('', search.getSearches);

module.exports = router;