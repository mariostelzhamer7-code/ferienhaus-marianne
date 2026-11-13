/* Ferienhaus Marianne PWA 1.0.1 — guaranteed local shell and licensed photo previews. */
const CACHE_NAME="marianne-v1.0.1r2";
const ASSETS=[
  "./",
  "./index.html",
  "./style.css",
  "./modern.css",
  "./data.js",
  "./photos.js",
  "./i18n.js",
  "./admin.js",
  "./app.js",
  "./assets/logo.svg",
  "./assets/icon-192.png",
  "./assets/apple-touch-icon.png",
  "./assets/de-flag.svg",
  "./manifest.webmanifest",
  "./vendor/qrcode.min.js",
  "./assets/photos/schafberg.jpg",
  "./assets/photos/zwoelfer.jpg",
  "./assets/photos/kaiservilla.jpg",
  "./assets/photos/schifffahrt.jpg",
  "./assets/photos/schwarzensee.jpg",
  "./assets/photos/plomberg.jpg"
];
self.addEventListener("install",event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await cache.addAll(ASSETS);
    await self.skipWaiting();
  })());
});
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET")return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(request,{ignoreSearch:true});
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok)await cache.put(request,response.clone());
      return response;
    }catch(error){return cached||Response.error()}
  })());
});
