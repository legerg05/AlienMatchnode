var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //Show the home page.
});

router.post('/create', function(req, res, next) {
  //Make new profiles
});

router.get('/Aliens', function(req, res, next) {
  //See options
});

router.get('AlienMatch', function(req, res, next) {
  //Match me!
}

module.exports = router;
