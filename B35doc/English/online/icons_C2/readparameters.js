var parametersEnvName = [];
var parametersEnvValue = [];

function readParameters(myicons) {
	var parametersFileName = myicons+"/searchparameters.xml";
	var parametersFile = loadXML(parametersFileName);
	var x = parametersFile.getElementsByTagName('param');
	for (i = 0; i < x.length; i++) {
		parametersEnvName[i] = x[i].getAttribute('name');	
		parametersEnvValue[i] = x[i].getAttribute('value');
	}		
}
