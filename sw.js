self.addEventListener("install", function(event){
    //Fires when the browser installs the app
    //Here we are just logging the event and the contents of the object passed to the event.
    //The purpose of this event is to give the service worker a place to setup local
    // environment after the installation completes
    console.log('SW: Event fired: ' + event.type);

});

self.addEventListener("activate", function(event){
    //
    console.log('SW: Event fired: ' + event.type);

});

// self.addEventListener("fetch", function(event){
//     //Fires whenever the app requests a resource (file or data)
//     console.log('SW: Fetching ' + event.request.url);
//     //next, go get the requested resource from the network
//     event.respondWith(fetch(event.request));
// });