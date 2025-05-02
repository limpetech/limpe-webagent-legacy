exports.WebNINA = class WebNINA {
    constructor(apiURL, apiKey){
        this.apiURL = apiURL;
        this.apiKey = apiKey;
    }

    // Note: callback function should accept "aToken" parameter
    login (screenname, password, callback){

        let params = new URLSearchParams({
            f: "JSON",
            devId: this.apiKey,
            s: screenname,
            pwd: password,
        }).toString();

        fetch(`${this.apiURL}/auth/clientLogin?f=JSON`,{
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: params
        })
        .then(response => response.json())
        .then(data =>{
            // If the login is not successful, the "response" object will have
            // a status code different from 200
            if (data.response.statusCode !== 200){
                // statusText contains detailed information about the error
                throw new Error('Login failed: ' + data.response.statusText);
            } else {
                // If the login succeeded - call callback
                callback(data.response.data.token.a);
            }
        })
        .catch(error => {
            throw new Error('Error logging in: ' + error);
        });
    }

    // Note: callback function should accept following parameters:
    // myAimId, aimsid, fetchBaseURL
    startSession(aToken, callback){
        let params = new URLSearchParams({
            f: "JSON",
            k: this.apiKey,
            a: aToken,
            clientName: "AIM_2011",
            clientVersion: "1.00",
            events: "buddylist,conversation,im,dataIM,imserv,myInfo,offlineIM,presence,sentIM,sentDataIM,typing,lifestream,rateLimit,notification,service,urlInfo,permitDeny,ftux,preference,userAddedToBuddyList",
            
        }).toString();

        fetch(`${this.apiURL}/aim/startSession?${params}`)
        .then(response => response.json())
        .then(data =>{
            // If starting session is not successful, the "response" object will have
            // a status code different from 200
            if (data.response.statusCode !== 200){
                // statusText contains detailed information about the error
                throw new Error('Starting session failed: ' + data.response.statusText);
            } else {
                // If starting session succeeded - call callback
                callback(data.response.data.myInfo.aimId, data.response.data.aimsid, data.response.data.fetchBaseURL);
            }
        })
        .catch(error => {
            throw new Error('Error starting session: ' + error);
        });
    }

    // Note: callbacks parameter should contain an object
    // with the following properties:
    //
    // * IMCallback - function, which will be called when new message is received.
    //                Paramters: sender, text
    //
    // * BuddyListCallback - function, which will be called when "buddylist" event is received.
    //                       Parameters: groups (array of buddy groups)  

    startPolling(fetchBaseURL, callbacks){
        function poll(fetchBaseURL, callbacks){
            fetch(fetchBaseURL)
            .then(response => response.json())
            .then(data =>{
                // Foreach through events
                data.response.data.events.forEach(event => {
                    switch (event.type){
                        case "buddylist":
                            callbacks.BuddyListCallback(event.eventData.groups);
                            break;
                    
                    }
                });

                // Change fetchEvents URL to new
                fetchBaseURL = data.response.data.fetchBaseURL;

                // Wait and call poll again
                setTimeout(() => {
                    poll(fetchBaseURL, callbacks);
                }, data.response.data.timeToNextFetch);
            })
            .catch(error => {
                throw new Error('Error while polling: ' + error);
            });
        }

        poll(fetchBaseURL, callbacks);
    }
}