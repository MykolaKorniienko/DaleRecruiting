let express = require('express');
let router = express.Router();
 
let user = require('../controllers/user.controller.js');

router.post('', user.create);
router.get('', user.findAll);
router.get('/:userId', user.findById);
router.put('', user.update);
router.delete('/:userId', user.delete);
 
module.exports = router;