"use strict";

var configuration = {
	"statuses": {
		"offline": "res/status/offline.png",
		"online": "res/status/online.png",
		"away": "res/status/away.png"
	}
}

function setUp(){
	if (AIMstatus === "offline"){
		document.getElementById("statusIcon").src=configuration.statuses.offline;
	}
	else if (AIMstatus === "online"){
		document.getElementById("statusIcon").src=configuration.statuses.online;
	}
	else if (AIMstatus === "away"){
		document.getElementById("statusIcon").src=configuration.statuses.away;
	}
	fetchEvents();
	getPresence();
	makeBuddiesList();
	var intervalID = window.setInterval(afetchEvents, 5000);

	
}

function makeBuddiesList(){
	buddiesList.forEach(function (group){
		group.buddies.forEach(function (buddy){
			if (buddy.state === "offline"){
			document.getElementsByClassName("buddylist-list")[0].innerHTML = document.getElementsByClassName("buddylist-list")[0].innerHTML.concat("<p onclick=\"openIM(").concat(buddy.aimId).concat(")\"><img height='20px' width='20px' src='").concat(configuration.statuses.offline).concat("'>").concat(buddy.friendly || buddy.aimId).concat("</p>");
			}
			else if (buddy.state === "online"){
			document.getElementsByClassName("buddylist-list")[0].innerHTML = document.getElementsByClassName("buddylist-list")[0].innerHTML.concat("<p onclick=\"openIM(").concat(buddy.aimId).concat(")\"><img height='20px' width='20px' src='").concat(configuration.statuses.online).concat("'>").concat(buddy.friendly || buddy.aimId).concat("</p>");
			}
			else if (buddy.state === "away"){
			document.getElementsByClassName("buddylist-list")[0].innerHTML = document.getElementsByClassName("buddylist-list")[0].innerHTML.concat("<p onclick=\"openIM(").concat(buddy.aimId).concat(")\"><img height='20px' width='20px' src='").concat(configuration.statuses.away).concat("'>").concat(buddy.friendly || buddy.aimId).concat("</p>");
			}
		});
	});
}

function openIM(extUIN){
	if (document.body.contains(document.getElementById("tmp"))){
		document.getElementsByClassName("imscene")[0].outerHTML = "";
	}
	currentConversation = extUIN;
	extUIN = 0;
	document.body.innerHTML = document.body.innerHTML.concat('<div class="imscene"><div class="imscene-header"><h4><!--<img height="20px" width="20px" src="').concat(configuration.statuses.offline).concat('"-->').concat(currentConversation).concat('</h4></div><p class="msg"><br></p><div class="imscene-bottom"><input class="imscene-bottom-input"></input><button class="imscene-bottom-button" onclick="sendIMA(').concat(currentConversation).concat(')').concat('">Отправить</button></div></div><div id="tmp"></div>');
}

function sendIMA(extUIN){
	if (document.getElementsByClassName("imscene-bottom-input")[0].value != ""){
		sendIM(extUIN, document.getElementsByClassName("imscene-bottom-input")[0].value);
	}
}

function appendConvo(from, msg){
	if (from === login){
		document.getElementsByClassName("imscene-bottom-input")[0].value = "";
	}
	document.getElementsByClassName("msg")[0].innerHTML = document.getElementsByClassName("msg")[0].innerHTML.concat(from).concat(": ").concat(replaceKoloboks(msg)).concat("<br>");
}