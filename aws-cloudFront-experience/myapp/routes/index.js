var express = require('express');
var router = express.Router();

var fs = require('fs');
var Q = require('q');
var util = require('util');

//AWS
var AWS = require('aws-sdk');
var BUCKET_NAME = 'vd-bucket-one';
var AWS_ACCESS_KEY_ID = 'AKIAIR4TKDYFJE3SVW3Q';
var AWS_SECRET_ACCESS_KEY = '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';
AWS.config.update({ accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY });
//AWS END

var SUCCESS_MES = 'file has been uploaded.';
var FILE_DOESNT_EXIST = 'File not found.';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AWS CloudFront Test' });
});

//METHODS
function exists(file){
	var defer = Q.defer();
	fs.exists(file, defer.resolve);
	return defer.promise;
}
//MUST BE MOVED

router.get('/upload', function ( req, res, next ){
	var s3 = new AWS.S3();
	var filePath = 'data/meat.jpg';
	exists(filePath)
		.then(function(isExist){
			if( !isExist ){
				return res.status(404).json({error: FILE_DOESNT_EXIST});
			}
		});
	var body = fs.createReadStream(filePath);
	var s3obj = new AWS.S3({params: { Bucket: BUCKET_NAME, Key: 'meat.jpg' }});
	s3obj.upload({Body: body}).
	  on('httpUploadProgress', function(evt) { 
	  	console.log(evt); })
	  .send(function(err, data) { 

	  	if(err) {
	  		return res.status(500).json({error: err});
	  	} else {
	  		return res.json({status:true, message:SUCCESS_MES});
	  	}

	   });
} );

module.exports = router;
