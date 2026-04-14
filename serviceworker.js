const staticHarmonium = "web-harmonium-v1";
const assets = [
  "./",
  "./index.html",
  "./harmonium-kannan-orig.wav",
  "./reverb.wav",
  "./manifest.json",
  "./webharmonium.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHarmonium).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
