self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meu-projeto-cache').then((cache) => {
      return cache.addAll([
        '/projeto-pwa/', 
        '/projeto-pwa/index.html',
        '/projeto-pwa/style.css',
        '/projeto-pwa/app.js',
        '/projeto-pwa/manifest.json',
        '/projeto-pwa/icons/appstore.png', 
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
