/* Ferienhaus Marianne 1.0.2 — one-iPad offline shell and optional local image cache. */
const CACHE_NAME="marianne-v1.0.2r2";
const CORE=[
 "./","./index.html","./style.css","./modern.css","./v102.css","./data.js",
 "./photos.js","./curated.js","./i18n.js","./v102-i18n.js","./v102-details.js",
 "./admin.js","./app.js","./manifest.webmanifest","./vendor/qrcode.min.js",
 "./assets/logo-v102.svg","./assets/skyline-v102.svg",
 "./assets/icon-192.png","./assets/apple-touch-icon.png","./assets/de-flag.svg"
];
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  await cache.addAll(CORE);
  // Once the host uploads the selected photos, cache them in a single background pass.
  try{
   const res=await fetch("./curated.js",{cache:"reload"});
   const txt=await res.text();
   const paths=[...new Set((txt.match(/assets\/curated\/[a-z0-9_-]+\.jpg/g)||[]).map(p=>"./"+p))];
   if(paths.length)await Promise.all(paths.map(p=>cache.add(p).catch(()=>{})));
  }catch(e){}
  await self.skipWaiting();
 })());
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key!==CACHE_NAME)await caches.delete(key);
  await self.clients.claim();
 })());
});
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET")return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE_NAME);
  const cached=await cache.match(req,{ignoreSearch:true});
  if(cached)return cached;
  try{
   const response=await fetch(req);
   if(response.ok)cache.put(req,response.clone());
   return response;
  }catch(e){return cached||Response.error()}
 })());
});
