var express = require('express');
var router = express.Router();
let productCtrl = require('../controllers/products.js')

/* GET products listing. */
router.get('/', productCtrl.index);

module.exports = router;
