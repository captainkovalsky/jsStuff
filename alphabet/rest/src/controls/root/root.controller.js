'use strict';

exports.parseCriminals = function*(next){
	this.status = 200;

	this.body = {
		parsed: 'OK'
	}	;
};
