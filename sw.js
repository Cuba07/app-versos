// Guarda la app para que abra sin conexión. Los versos y audios viven aparte, en la base del navegador.
const CACHE = 'ese-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(FILES.map(f => c.add(f).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

// La app primero: se usa la red cuando hay, y la copia guardada cuando no.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const net = await fetch(r);
      const c = await caches.open(CACHE); c.put(r, net.clone());
      return net;
    } catch (err) {
      const hit = await caches.match(r, { ignoreSearch: true });
      return hit || caches.match('./index.html');
    }
  })());
});
