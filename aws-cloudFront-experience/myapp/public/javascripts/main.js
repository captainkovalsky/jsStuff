(function(){
	'use strict';
	var $ = function(selector){
		return document.querySelector(selector);
	};

	var UPLOAD_BUTTON_ID = '#upload';

	var uploadFile = function uploadFile ( e ){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open('GET', '/upload', true);
		xmlhttp.send(null);
	};

	document.addEventListener('DOMContentLoaded', function ( e ){
		var uploadButton = $(UPLOAD_BUTTON_ID).addEventListener('click', uploadFile);
	});
})();