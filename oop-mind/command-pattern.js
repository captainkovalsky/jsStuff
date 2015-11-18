function Command(func){
	return {
		execute: function() {
			return func();
		}
	};
}

function logMessage(text) {
	console.log('log message command ',text);
}


function run() {
	var command = new Command( function() {
		logMessage('test');
	});
	
	command.execute();
	
}
run();