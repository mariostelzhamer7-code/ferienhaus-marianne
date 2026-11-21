/* Ferienhaus Marianne 1.1.5 — safe offline cache and live update mechanism.
   Network-first for app code/navigation; photos remain available offline. */
"use strict";
const APP_VERSION = "1.1.5";
const CACHE_NAME = "marianne-v1.1.5r1";
const CORE = ["./","./index.html","./style.css","./modern.css","./v102.css","./v103.css","./v104.css","./v112.css","./v113.css","./v114.css","./v115.css","./data.js","./photos.js","./curated.js","./v103-data.js","./i18n.js","./v102-i18n.js","./v103-i18n.js","./v104-i18n.js","./v110-bikes.js","./v102-details.js","./admin.js","./updates.js","./app.js","./manifest.webmanifest","./vendor/qrcode.min.js","./assets/logo-v102.png","./assets/skyline-v102.jpg","./assets/apple-touch-icon.png","./assets/de-flag.svg","./assets/bikes/bike-wolfgangsee.webp","./assets/bikes/bike-bad-ischl.webp","./assets/bikes/bike-breitenberg.webp","./assets/bikes/bike-three-lakes.webp","./assets/bikes/bike-schafberg.webp","./assets/bikes/bike-postalm.webp"];
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Precache a fresh copy of every app file (HTTP cache bypass).
    await cache.addAll(CORE.map(path => new Request(path, { cache: "reload" })));
    // Photos are optional offline extras. A failed photo must not break installation.
    try {
      const r = await fetch("./curated.js", { cache: "reload" });
      const s = await r.text();
      const paths = [...new Set((s.match(/assets\/curated\/[a-z0-9_-]+\.jpg/g) || []).map(x => "./" + x))];
      await Promise.all(paths.map(path => cache.add(path).catch(() => {})));
    } catch(e) { /* App shell still installs successfully */ }
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("marianne-v") && k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("message", event => {
  if(event.data && event.data.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  } else if(event.data && event.data.type === "GET_VERSION" && event.ports && event.ports[0]) {
    event.ports[0].postMessage({version:APP_VERSION});
  }
});
self.addEventListener("fetch", event => {
  const req = event.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  if(!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  // Do not intercept or cache the update/recovery page, version probe or SW script.
  if(/\/(?:update\.html|version\.json|sw\.js)$/.test(url.pathname)) return;
  const isAppFile = req.mode === "navigate" || /\.(?:html|js|css|webmanifest)$/.test(url.pathname);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if(isAppFile) {
      const key = req.mode === "navigate" ? "./index.html" : req;
      try {
        const fresh = await fetch(req, {cache:"no-store"});
        if(fresh.ok) await cache.put(key, fresh.clone()).catch(() => {});
        return fresh;
      } catch(e) {
        const cached = await cache.match(key, {ignoreSearch:true});
        if(cached) return cached;
        if(req.mode === "navigate") return await cache.match("./", {ignoreSearch:true}) || Response.error();
        return Response.error();
      }
    }
    const cached = await cache.match(req, {ignoreSearch:true});
    if(cached) return cached;
    try {
      const fresh = await fetch(req);
      if(fresh.ok) await cache.put(req, fresh.clone()).catch(() => {});
      return fresh;
    } catch(e) { return Response.error(); }
  })());
});
