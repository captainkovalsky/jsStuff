var express = require('express');

var arugmentGrabber = require('../models/ArgumentGrabber.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({test: 'OK'});
});

router.get('/scrapData', function(req, res){

  var successFn = function(data){
    return res.json(data);
  };

  var errorFn = function(err){
    return res.status(500).json(err);
  };

  arugmentGrabber.loadData().done(successFn, errorFn);
});

module.exports = router;
