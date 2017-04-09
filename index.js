var child_process 			= require('child_process');
var adapter 				= require('../../adapter-lib.js');
var exec 					= new adapter("exec");

process.on('message', function(request) {
	var status = request.status;
	var data = request.data;
	sendEXEC(status, data);
});


function sendEXEC(status, data){
	if(status == 1){
		var execString = data.CodeOn;
	}else{
		var execString = data.CodeOff;
	}
	child_process.exec(execString, function(error, stdout, stderr){
		if(error){
			exec.log.error(error);
		}else{
			exec.log.debug(stdout);
			exec.log.debug("Executing Done");
		}
	});
}