var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var dcClass=["sean","drew"]
  res.render('index', { classArray: dcClass });
});

module.exports = router;
