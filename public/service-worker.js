const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = ["/", "/index.html"];

// هنگام نصب Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// فعال شدن
self.addEventListener("activate", (event) => {
    console.log("Service Worker فعال شد");
});

// پاسخ به درخواست‌ها
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});