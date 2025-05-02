// Import React
const React = require('react');
const ReactDOM = require('react-dom');

// Import WebNINA and instantiate it
const WebNINA = new (require('./lib/webnina/').WebNINA)
(`https://api.nina.bz`, `ao1ZqnOhiY5udFbG`);

// Global variables
var contactList = [];
var isLoaded = false;

// Callbacks
const callbacks = {
    BuddyListCallback: function (groups){
        // Foreach through buddy groups
        groups.forEach(group => {
            // Foreach through buddies
            group.buddies.forEach(buddy => {
                // Add to CL
                contactList.push(buddy.aimId);
            });
        });

        // FIXME: Find a better way to render main UI, not in the callback
        if (!isLoaded){
            // Require main UI
            const MainUI = require('./ui/main').MainUI;

            // Load main UI after receiving buddy list
            ReactDOM.render(
                <app>
                    <MainUI contacts={ contactList }/>
                </app>,
                document.body
            );

            isLoaded = true;
        }

    }
};

// handle Log In
function handleLogIn(sn, pwd){
    // Log in!
    WebNINA.login(sn, pwd, aToken=>{
        // Start session
        WebNINA.startSession(aToken, (myAimId, aimsid, fetchBaseURL)=>{
            // Start polling
            WebNINA.startPolling(fetchBaseURL, callbacks);
        });
    });
}


// Login page

// Require the login UI
const LoginUI = require('./ui/login').LoginUI

// Render login page
ReactDOM.render(
    <LoginUI login={ handleLogIn }></LoginUI>,
    document.body
);

// Load Bootstrap 4 CSS
let style = document.createElement('link');
style.rel = "stylesheet";
style.crossOrigin = "anonymous";
style.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";
document.head.appendChild(style);