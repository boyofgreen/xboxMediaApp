
// self.addEventListener('install', function(event) {
//   // Put `offline.html` page into cache
//   var offlineRequest = new Request('offline.html');
//   event.waitUntil(
//     fetch(offlineRequest).then(function(response) {
//       return caches.open('offline').then(function(cache) {
//         return cache.put(offlineRequest, response);
//       });
//     })
//   );
// });


// self.addEventListener('fetch', function(event) {
//   // Only fall back for HTML documents.
//   var request = event.request;
//   // && request.headers.get('accept').includes('text/html')
//   if (request.method === 'GET') {
//     // `fetch()` will use the cache when possible, to this examples
//     // depends on cache-busting URL parameter to avoid the cache.
//     event.respondWith(
//       fetch(request).catch(function(error) {
//         // `fetch()` throws an exception when the server is unreachable but not
//         // for valid HTTP responses, even `4xx` or `5xx` range.
//         return caches.open('offline').then(function(cache) {
//           return cache.match('offline.html');
//         });
//       })
//     );
//   }
//   // Any other handlers come here. Without calls to `event.respondWith()` the
//   // request will be handled without the ServiceWorker.
// });





















var CACHE_NAME = 'dependencies-cache';

// Files required to make this app work offline
var REQUIRED_FILES = ["jquery.js","index.html","reset.css", "style.css","videoPlayer.js", "manifest.json", "app.css","videoPlayer.js","directionalnavigation-1.0.0.0.js", "build/react.js","build/react-dom.js","browser.min.js", "frontpage.js", "/"];


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
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
  event.waitUntil(self.clients.claim());
});















// // [Working example](/serviceworker-cookbook/json-cache/).

// var CACHE_NAME = 'dependencies-cache';

// self.addEventListener('install', function(event) {
//   // Perform the install step:
//   // * Load a JSON file from server
//   // * Parse as JSON
//   // * Add files to the cache list

//   // Message to simply show the lifecycle flow
//   console.log('[install] Kicking off service worker registration!');

//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         // With the cache opened, load a JSON file containing an array of files to be cached
//         return fetch('files.json').then(function(response) {
//           // Once the contents are loaded, convert the raw text to a JavaScript object
//           return response.json();
//         }).then(function(files) {
//           // Use cache.addAll just as you would a hardcoded array of items
//           console.log('[install] Adding files from JSON file: ', files);
//           return cache.addAll(files);
//         });
//       })
//       .then(function() {
//         // Message to simply show the lifecycle flow
//         console.log(
//           '[install] All required resources have been cached;',
//           'the Service Worker was successfully installed!'
//         );

//         // Force activation
//         return self.skipWaiting();
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return the response from the cached version
//         if (response) {
//           console.log(
//             '[fetch] Returning from Service Worker cache: ',
//             event.request.url
//           );
//           return response;
//         }

//         // Not in cache - return the result from the live server
//         // `fetch` is essentially a "fallback"
//         console.log('[fetch] Returning from server: ', event.request.url);
//         return fetch(event.request);
//       }
//     )
//   );
// });

// self.addEventListener('activate', function(event) {
//   // Message to simply show the lifecycle flow
//   console.log('[activate] Activating service worker!');

//   // Claim the service work for this client, forcing `controllerchange` event
//   console.log('[activate] Claiming this service worker!');
//   event.waitUntil(self.clients.claim());
// });
