(function(module){
'use strict';		

var fs = require('fs');
var Q = require('q');

/**
* Checks whether file is exists.
* @returns {Promise} 
*/
var fileUtils = {
	exists: function exists(file){
		var defer = Q.defer();
		fs.exists(file, defer.resolve);
		return defer.promise;
	}
};


	module.exports = fileUtils;
})(module);


