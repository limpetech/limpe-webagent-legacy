/*
@Limpe WEBAGENT -------------- (c) InceptionTime - 2024

Loading Script
*/

function load(){
	var endpoints = getEndpoints();
	
	var APIhost = endpoints.host;
	
	
	// Login Endpoint
	var APIloginURL = endpoints.endpoints[0].url;
	var APIloginActive = endpoints.endpoints[0].active;
	
	
	// Register Endpoint
	var APIregURL = endpoints.endpoints[1].url;
	var APIregActive = endpoints.endpoints[1].active;
	
	/*
	// PreSecure Endpoint
	var APIprepURL = endpoints.endpoints[2].url;
	var APIprepActive = endpoints.endpoints[2].active;
	
	// PostSecure Endpoint
	var APIpospURL = endpoints.endpoints[3].url;
	var APIpospActive = endpoints.endpoints[3].active;
	*/
	
	// Accounts Endpoint
	var APIaccURL = endpoints.endpoints[4].url;
	var APIaccActive = endpoints.endpoints[4].active;
}

function getEndpoints(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://agentcdn.ucoz.org/endpoints.json', false);
	xhr.send(null);
	if (xhr.status === 200) {
		return JSON.parse(xhr.responseText);
	} else {
		throw new Error('Request failed: ' + xhr.statusText);
	}
}

