/* WebAgent ICQ loading script */
var appHTML = '<link href="res/web.css" rel="stylesheet" /><div class="scene" onload="setUp()"><div class="buddylist"><div class="buddylist-header"><h4>Контакты</h4></div><div class="buddylist-list"></div><br><br><div class="buddylist-bottom"><div class="buddylist-bottom-status"><img height="30px" width="30px" id="statusIcon"></div></div></div></div>';

function performLogin(){
	login = document.getElementById("UINinput").value;
	pwd = document.getElementById("PWDinput").value;
	
	if (initialRequest() === 1){
		makeSessionKey()
		if (startSession() === 1){
			document.body.innerHTML = appHTML;
			setUp();
		}
	}
}

function makeLoginPage(){
	document.body.innerHTML = '<link href="res/web.css" rel="stylesheet" /><div class="loginpage"><img src="res/banner.png" width="240" height="80"><br><br><input id="UINinput" type="text" placeholder="UIN/Screen name/Почта"></input><br><br><input id="PWDinput" type="password" placeholder="Пароль"></input><br><br><button onclick="performLogin()">Войти в систему</button></div>';
}

