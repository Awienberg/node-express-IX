var express = require('express');
var router = express.Router();
const modCountry = require("../controllers/handleCountries");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      subtitle: 'Page for Display and Registration of World Data'
  });
});

router.get('/country', function(req, res, next) {
  modCountry.getCountries(res);
});
router.post("/country", function(req, res, next) {
  modCountry.getCountry(res, req.body.ctry);
});

router.get('/countryData', function(req, res, next) {
  modCountry.countryData(res);
});
router.post("/countryData", function(req, res, next) {
  modCountry.postCountry(req, res, next);
});

module.exports = router;
