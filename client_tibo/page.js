function create() {
	// alert("CREATE!");

	clean('updater');
	clean('tracker');

	var newDiv = document.createElement("div");
	newDiv.setAttribute('id', 'creater');


	var inputClient = document.createElement("input");
	inputClient.setAttribute('type', 'text');
	inputClient.setAttribute('id', 'inputClientId');
	inputClient.defaultValue = 'Client ID';

	var inputTransport = document.createElement("input");
	inputTransport.setAttribute('type', 'text');
	inputTransport.setAttribute('id', 'inputTransportId');
	inputTransport.defaultValue = 'Transport ID';

	var buttonValidate = document.createElement("button");
	buttonValidate.setAttribute('type', 'button');
	buttonValidate.setAttribute('id', 'createValidation');
	buttonValidate.innerHTML = 'Validation';

	var inputInfo = document.createElement("input");
	inputInfo.setAttribute('type', 'text');
	inputInfo.setAttribute('id', 'infoProduct');
	inputInfo.defaultValue = 'Information about product';

	var newDiv1 = document.createElement("div");
	var newDiv2 = document.createElement("div");
	var newDiv3 = document.createElement("div");

	newDiv.appendChild(newDiv1);
	newDiv.appendChild(newDiv2);
	newDiv.appendChild(newDiv3);

	newDiv1.appendChild(inputClient);
	newDiv1.appendChild(inputTransport);
	newDiv2.appendChild(inputInfo);	
	newDiv3.appendChild(buttonValidate);
	document.body.appendChild(newDiv);
}

function update() {
	// alert("UPDATE!");

	clean('tracker');
	clean('creater');

	var newDiv = document.createElement("div");
	newDiv.setAttribute('id', 'updater');

	var inputCmd = document.createElement("input");
	inputCmd.setAttribute('type', 'text');
	inputCmd.defaultValue = 'UPDATE';

	newDiv.appendChild(inputCmd);
	document.body.appendChild(newDiv);
}

function track() {
	// alert("TRACK!");

	clean('updater');
	clean('creater');

	var newDiv = document.createElement("div");
	newDiv.setAttribute('id', 'tracker');

	var inputCmd = document.createElement("input");
	newDiv.appendChild(inputCmd);
	inputCmd.setAttribute('type', 'text');
	inputCmd.defaultValue = 'TRACK';

	document.body.appendChild(newDiv);
}

function clean(elementId) {
	var element = document.getElementById(elementId);
	if (element) {
		element.parentNode.removeChild(element);
	}
}
