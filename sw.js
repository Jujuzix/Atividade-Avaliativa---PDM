let cacheName = "Atividade Avaliativa";
let filesToCache = ["/", "/index.html", "index.html", "index.html", "hrAulas.html", "hrAulas", "hrPE.html", "hrPE",
                            "/css/style1.css", "/css/style2.css", "/css/style3.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});