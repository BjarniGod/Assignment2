const staticCache = "Static-cache-v1";
const dynamicCache = "Dynamic-cache-v1";

const assets = [
    "/",
    "/index.html",
    "/pages/fallback.html",
    "/js/app.js",
    "/js/ui.js",
    "/js/materialize.min.js",
    "/css/materialize.min.css",
    "/css/app.css",
    "/img/binder.png",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
];


self.addEventListener("install", function(event){
    //Fires when the browser installs the app
    //Here we are just logging the event and the contents of the object passed to the event.
    //The purpose of this event is to give the service worker a place to setup local
    // environment after the installation completes
    console.log('SW: Event fired: ' + event.type);
    // event.waitUntil(caches.open('static').then(function(cache){
    //     console.log("SW: Precaching App Shell");
    //     cache.add(index.html)
    // }))

    event.waitUntil(
        caches.open(staticCache).then(function (cache) {
          console.log("SW: Precaching App shell");
          cache.addAll(assets);
        })
      );
});

self.addEventListener("activate", function(event){
    //
    console.log('SW: Event fired: ' + event.type);
    event.waitUntil(
        caches.keys().then((keys) => {
          return Promise.all(
            keys
              .filter((key) => key !== staticCache && key !== dynamicCache)
              .map((key) => caches.delete(key))
          );
        })
      );
});

self.addEventListener("fetch", function(event){
    //Fires whenever the app requests a resource (file or data)
    console.log('SW: Fetching ' + event.request.url);
    //next, go get the requested resource from the network
    // event.respondWith(fetch(event.request));
    
    // event.respondWith(
    //     caches
    //       .match(event.request)
    //       .then((response) => {
    //         return response || fetch(event.request);
    //       })
    // );
    
    event.respondWith(
        caches
          .match(event.request)
          .then((response) => {
            return (
              response ||
              fetch(event.request)
              .then((fetchRes) => {
                return caches.open(dynamicCache).then((cache) => {
                  cache.put(event.request.url, fetchRes.clone());
                  return fetchRes;
                });
              }
              )
            );
          })
          .catch(() => caches.match("/pages/fallback.html"))
      );


});