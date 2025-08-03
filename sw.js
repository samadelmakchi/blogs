const CACHE_NAME = "smd_pwa_002";
const OFFLINE_URL = "index.html";

//------------------------------------------------------------------------------------

self.addEventListener("install", event => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			cache.add(new Request(OFFLINE_URL, { cache: "reload"}));
            //---------- main page
			cache.add(new Request("index.html"));
            cache.add(new Request("manifest.json"));
            cache.add(new Request("sw.js"));
            cache.add(new Request("sitemap.xml"));
            cache.add(new Request("robots.txt"));
            cache.add(new Request("favicon_config.json"));
            cache.add(new Request(".htaccess"));
			//---------- img js css
            cache.add(new Request("assets/img/bg.jpg"));
            cache.add(new Request("assets/js/main.js"));
            cache.add(new Request("assets/css/main.css"));
            //---------- vendor
            cache.add(new Request("assets/vendor/aos/aos.cjs.js"));
            cache.add(new Request("assets/vendor/aos/aos.esm.js"));
            cache.add(new Request("assets/vendor/aos/aos.js.map"));
            cache.add(new Request("assets/vendor/aos/aos.css"));
            cache.add(new Request("assets/vendor/aos/aos.js"));

            cache.add(new Request("assets/vendor/bootstrap/bootstrap.bundle.min.js"));
            
            cache.add(new Request("assets/vendor/bootstrap-icons/bootstrap.bundle.min.js"));
            //---------- logo
            cache.add(new Request("assets/logo/preview.jpg"));
            cache.add(new Request("assets/logo/logo.png"));
            cache.add(new Request("assets/logo/android-144x144.png"));
            cache.add(new Request("assets/logo/favicon.ico"));
            cache.add(new Request("assets/logo/favicon.png"));
            cache.add(new Request("assets/logo/favicon-16x16.png"));
            cache.add(new Request("assets/logo/favicon-32x32.png"));
            cache.add(new Request("assets/logo/favicon-48x48.png"));
            cache.add(new Request("assets/logo/favicon-64x64.png"));
            cache.add(new Request("assets/logo/favicon-96x96.png"));
            cache.add(new Request("assets/logo/favicon-128x128.png"));
            cache.add(new Request("assets/logo/favicon-256x256.png"));
            cache.add(new Request("assets/logo/safari-pinned-tab.svg"));
            cache.add(new Request("assets/logo/apple-touch-icon.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-20x20.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-29x29.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-40x40.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-48x48.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-50x50.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-57x57.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-58x58.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-60x60.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-72x72.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-76x76.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-80x80.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-87x87.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-96x96.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-100x100.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-114x114.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-120x120.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-128x128.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-144x144.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-152x152.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-167x167.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-168x168.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-180x180.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-192x192.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-256x256.png"));
            cache.add(new Request("assets/logo/apple-touch-icon-512x512.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-320x460.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-640x920.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-640x1096.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-768x1004.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-748x1024.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-1536x2008.png"));
            cache.add(new Request("assets/logo/apple-touch-startup-image-1496x2048.png"));
            cache.add(new Request("assets/logo/mstile-144x144.png"));
            cache.add(new Request("assets/logo/mstile-70x70.png"));
            cache.add(new Request("assets/logo/mstile-150x150.png"));
            cache.add(new Request("assets/logo/mstile-310x150.png"));
            cache.add(new Request("assets/logo/mstile-310x310.png"));
            cache.add(new Request("assets/logo/maskable-icon-192x192"));
            cache.add(new Request("assets/logo/maskable-icon-512x512"));
            cache.add(new Request("assets/logo/browserconfig.xml"));
            cache.add(new Request("assets/logo/android-chrome-16x16.png"));
            cache.add(new Request("assets/logo/android-chrome-32x32.png"));
            cache.add(new Request("assets/logo/android-chrome-36x36.png"));
            cache.add(new Request("assets/logo/android-chrome-48x48.png"));
            cache.add(new Request("assets/logo/android-chrome-64x64.png"));
            cache.add(new Request("assets/logo/android-chrome-72x72.png"));
            cache.add(new Request("assets/logo/android-chrome-96x96.png"));
            cache.add(new Request("assets/logo/android-chrome-144x144.png"));
            cache.add(new Request("assets/logo/android-chrome-192x192.png"));
            cache.add(new Request("assets/logo/android-chrome-256x256.png"));
            cache.add(new Request("assets/logo/android-chrome-384x384.png"));
            cache.add(new Request("assets/logo/android-chrome-512x512.png"));
		})
	);
});

//------------------------------------------------------------------------------------

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			if ("navigationPreload" in self.registration) {
				await self.registration.navigationPreload.enable();
			}
		})()
	);
	self.clients.claim();

	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![CACHE_NAME].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

//------------------------------------------------------------------------------------

self.addEventListener("fetch", (event) => {
	if (event.request.mode === "navigate") {
		event.respondWith(
			(async () => {
				try {
					const preloadResponse = await event.preloadResponse;
					if (preloadResponse) {
						return preloadResponse;
					}
					const networkResponse = await fetch(event.request);
					return networkResponse;
				} catch (error) {
					const cache = await caches.open(CACHE_NAME);
					const cachedResponse = await cache.match(OFFLINE_URL);
					return cachedResponse;
				}
			})()
		);
	}
});

//------------------------------------------------------------------------------------
