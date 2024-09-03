function replaceObjectHTML(object, html){
    object.innerHTML = html;
}
function replaceBodyHTML(html){
    document.body.innerHTML = html;
}
function echo(html){
    document.body.innerHTML = document.body.innerHTML.concat(html);
}
function echoInOBJ(object, html){
    object.innerHTML = object.innerHTML.concat(html);
}
function wait(milliseconds){
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function waitSec(seconds){
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < seconds * 1000);
}

function timeout(milliseconds, func){
    setTimeout(func, milliseconds);
}
function timeoutSeconds(seconds, func){
    setTimeout(func, seconds*1000);
}
function ewait(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}
function getCookie(name) {
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function setCookie(name, value){
    document.cookie = name.concat("=",value);
}
function getInnerHTML(object){
    return object.innerHTML;
}
function tweenServicePosition(object, xy, ms, negative){
    if (xy == "x"){
        var start = Date.now();

        var timer = setInterval(function() {
            var timePassed = Date.now() - start;

            if (timePassed >= ms) {
                clearInterval(timer);
                return;
            }

            if (!negative){
                object.style.left = timePassed / 5 + 'px';
            }
            else if(negative){
                object.style.right = timePassed / 5 + 'px';
            }

        }, ms/100);

    }
    else if (xy == "y"){
        var start = Date.now();

        var timer = setInterval(function() {
            var timePassed = Date.now() - start;

            if (timePassed >= ms) {
                clearInterval(timer);
                return;
            }

            if (!negative){
                object.style.top = timePassed / 5 + 'px';
            }
            else if(negative){
                object.style.bottom = timePassed / 5 + 'px';
            }

        }, ms/100);
    }
}

