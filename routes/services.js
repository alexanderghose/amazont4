var express = require('express');
var router = express.Router();

/* GET services listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to amazon web services');
});

module.exports = router;
