var express = require('express');

var arugmentGrabber = require('../models/ArgumentGrabber.js');
var NameLib  = require('../models/Names.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({test: 'OK'});
});

router.get('/saveNames', function(req, res){
  NameLib.saveNames().then(function(err){
    return res.json({status: !!err ? 'error': 'saved'});
  });
});

router.get('/groupByCity', function(req, res){
  var successFn = function(grouped){
      return res.json(grouped);
  };

arugmentGrabber.loadData().then(arugmentGrabber.groupByCity).done(successFn);
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
