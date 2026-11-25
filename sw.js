// Uygulama olarak yüklenebilmesi için gerekli. Önbellek kullanmaz; her şey her zaman internetten gelir.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
