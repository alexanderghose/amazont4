var express = require('express');
var router = express.Router();
var ProductsModel = require('../models/products.js') // import from models/products.js file

/* GET products listing. */
router.get('/', function(req, res, next) {
  let products = ProductsModel.getProducts() // execute a function from the imported file, store the result in a variable
  res.send('welcome to amazon. our products are:' + products);
});

module.exports = router;
