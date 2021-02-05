const staticFoodieOrder = "foodie-order-v1"
const assets = [
    "/",
    "/index.html",
    "/favicon.io",
    "/logo192.png",
    "logo512.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticFoodieOrder).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
