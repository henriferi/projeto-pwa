self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meu-projeto-cache').then((cache) => {
      return cache.addAll([
        '/projeto-pwa/', // Página inicial do seu app (precisa do caminho correto)
        '/projeto-pwa/index.html',
        '/projeto-pwa/style.css',
        '/projeto-pwa/app.js',
        '/projeto-pwa/manifest.json',
        '/projeto-pwa/icons/appstore.png', // Cuidado com a duplicação
        '/projeto-pwa/icons/appstore.png',  // Remova o duplicado, se for o mesmo arquivo
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
