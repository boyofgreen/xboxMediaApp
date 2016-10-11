
/***************
 * You'll want to start with this content on the page, where we are doing a few things:
 * 1. identify cache name and array of items to be added to cache
 * 2. setting up the cache
 * 3. adding the files from our app into the cache
 * 
 * remember, this happens inside the "install" event so it doesn't run eveyr time page is loaded, only when the SW is being installed
 */


var CACHE_NAME = 'dependencies-cache';

// Files required to make this app work offline
var REQUIRED_FILES = ["jquery.js","index.html","reset.css", "style.css","videoPlayer.js", "manifest.json", "app.css","videoPlayer.js","directionalnavigation-1.0.0.0.js", "build/react.js","build/react-dom.js","browser.min.js", "frontpage.js"];


self.addEventListener('install', function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
      	// At this point everything has been cached
        return self.skipWaiting();
      })
  );
});



/*************
 * this part you will code in yourself :
 * 1. set up an event listener (self.addEventListnener), self is the "document" of the service Worker
 * 2.set promise on event (respondWith)
 * 3.check to see if response is in cache
 * 4.conditionally respond from cache or from server
 */

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
                    console.log('[fetch] Returning from Service Worker cache: ', event.request.url);
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});








self.addEventListener('activate', function(event) {
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker, alert will be fired on main page when event bubbels up
  event.waitUntil(self.clients.claim());
});