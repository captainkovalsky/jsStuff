'use strict';

var controller = require('./root.controller');
var router = require('koa-router')();

router.get('/parse', controller.parseCriminals);

module.exports = router.routes();
