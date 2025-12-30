'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2d22496bf7154406071a2bc23049a0f2",
"assets/AssetManifest.bin.json": "0c97d5c05c453a4536021959ef2575d9",
"assets/AssetManifest.json": "a0f493767872075ed23ad9c26ad52126",
"assets/assets/images/1.jpg": "17bd46463aa61a060f6c7c5cbb243b59",
"assets/assets/images/1i.png": "42037b6d101ac12862d5eb555679d905",
"assets/assets/images/ai.png": "1d20937faba2b0fd55ad12156f270cdc",
"assets/assets/images/b.png": "3b8a671edd4d4607b06c9c0c173eee9a",
"assets/assets/images/boot.png": "9b29dd3c2e445d877d21ee29b3a0c0a1",
"assets/assets/images/boot1.png": "955bdd6551f35253b0ef43f03a336bcd",
"assets/assets/images/c%2520copy.PNG": "7b2f42fa00fa38e824ebd9ac4e520dcd",
"assets/assets/images/c.PNG": "7b2f42fa00fa38e824ebd9ac4e520dcd",
"assets/assets/images/c1.jpg": "890365ea6b140fb1f4c744840fb4f825",
"assets/assets/images/c2.jpg": "4af5f16abc6d35ad6f37c36295dc7921",
"assets/assets/images/c3.jpg": "8454574b22d58b885114ae4fb4af3297",
"assets/assets/images/c4.jpg": "0b3263a9404a275da7719d655a9cd50a",
"assets/assets/images/canva.png": "d1f49c1051f2638c31f9c4ba0b5a29ec",
"assets/assets/images/cap.png": "3f19a1d6eb263b200c84cbab5eec78c7",
"assets/assets/images/center.jpg": "a5a65139df9fa0368c61661cafcfb957",
"assets/assets/images/college%2520copy.png": "701ae65963f54201f4a721b998b8e5cb",
"assets/assets/images/college.png": "701ae65963f54201f4a721b998b8e5cb",
"assets/assets/images/contact.jpg": "6f633e135cd54db81e600d99e902e514",
"assets/assets/images/cpp%2520copy.png": "d70ae8c6942148cb6afcccaf48e7db95",
"assets/assets/images/cpp.png": "d70ae8c6942148cb6afcccaf48e7db95",
"assets/assets/images/css%2520copy.png": "5b42a6f4a196fa67278a7e46971071c1",
"assets/assets/images/css.png": "0a5c1f226525c799a1805ede360e662d",
"assets/assets/images/cv%2520copy.png": "f26f6dc28037f2be6bda6baef3895d0f",
"assets/assets/images/cv.png": "f26f6dc28037f2be6bda6baef3895d0f",
"assets/assets/images/cv1.png": "dc36a5726e86c1a6268970dca116de93",
"assets/assets/images/cv2.png": "fc53902ee2b7454e98f0c5151cc3ee00",
"assets/assets/images/cv3.png": "e3c2173ce053c6defb1ef6c3921b81c5",
"assets/assets/images/cv4.png": "340982c1708789cbbb502f193b062e96",
"assets/assets/images/cv5.png": "c1662ab942f8df24165060973b597437",
"assets/assets/images/cv6.png": "f03a693a9c4eed5c140885136a494ef4",
"assets/assets/images/cv7.png": "7ed4956630f66622450b75e62ab095dd",
"assets/assets/images/cv8.png": "0c38d7b3bd59a8784d2b2b94dcedef50",
"assets/assets/images/dart.png": "2b879e6b87497e631d8251e59853cc14",
"assets/assets/images/devsinn%2520copy.png": "4c084cdb4c3d77356880dc7a8f8db2e7",
"assets/assets/images/Devsinn.jpg": "30ff363dccee17fbbfa534842b0621e5",
"assets/assets/images/devsinn.png": "4c084cdb4c3d77356880dc7a8f8db2e7",
"assets/assets/images/doll.png": "193f8dbdb4dd3989ff9f80fb1bfc9ea0",
"assets/assets/images/download.jpg": "b7404c126301e18e8ad9e43b373aa09b",
"assets/assets/images/download.png": "b7d4e851be42bb380f8f31828e8b0e8b",
"assets/assets/images/facebook%2520copy.png": "e526a5e3ac382ffffc4c18b39f64e72b",
"assets/assets/images/facebook.png": "e7599d07ba0bcec49383b339f2718b61",
"assets/assets/images/figma.png": "4dffa20e8a9a92f3e81db1ed3a7e69f5",
"assets/assets/images/fiza.jpg": "fb0c60cc33de3a77db96995fffacd54b",
"assets/assets/images/fiza1%2520copy%25202.png": "52aa949c8f62783ff684d34f3f245a18",
"assets/assets/images/fiza1%2520copy.png": "52aa949c8f62783ff684d34f3f245a18",
"assets/assets/images/fiza1.png": "bd6809e917d3ec4467089f03898e1e27",
"assets/assets/images/fiza2.jpg": "25590e79b0f38bedd94245970dda36f0",
"assets/assets/images/flutter%2520copy.png": "958cbe2f60e63bbbe6571c136187a81b",
"assets/assets/images/flutter.png": "92e891eff8d28ea388c2404d08bdb841",
"assets/assets/images/font.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/images/git%2520copy.png": "780091a5f20bf44185c12573e8d3c372",
"assets/assets/images/git.png": "9efbf790c3f31a5ca33ad0e57fc93142",
"assets/assets/images/github%2520copy%25202.png": "26b890006914553d3bda3d357878c328",
"assets/assets/images/github%2520copy.png": "1f9d9a8c8cfb8965fdceccc18cc42b25",
"assets/assets/images/github.png": "1f9d9a8c8cfb8965fdceccc18cc42b25",
"assets/assets/images/githubs.png": "f7c4cd6ffb38f4f7e225ca727047978c",
"assets/assets/images/html%2520copy.png": "856e4f2aa38a5e7825dc755f846d69ff",
"assets/assets/images/html.png": "7a02936a3f8bcef7d0706b2693fecb7f",
"assets/assets/images/i%2520copy.PNG": "a03e41a2fc91bba9374c4edd0b72e87d",
"assets/assets/images/i.PNG": "a03e41a2fc91bba9374c4edd0b72e87d",
"assets/assets/images/icon1.jpg": "08d8344a5d0f27ca5d72ed70f7510b5f",
"assets/assets/images/icon2.jpg": "a1937eb1ddc619d287afce8ff0b6ef7c",
"assets/assets/images/icon3.jpg": "08d8344a5d0f27ca5d72ed70f7510b5f",
"assets/assets/images/image.png": "9cdaa2eecf3434713e9959b13ba9aef7",
"assets/assets/images/in1.png": "b23c39f42f4658ae1679cf058d7fbc50",
"assets/assets/images/java.png": "b964db58724ec2feb9f15fe0bf611075",
"assets/assets/images/js.png": "274847fbc308551f853a2adb6998eff2",
"assets/assets/images/k.png": "0f3332ba8a71a26c53a555ef1d06cf04",
"assets/assets/images/kabeer%2520copy.png": "4751b9424cfe2c7a17e674875fccc756",
"assets/assets/images/kabeer.png": "4751b9424cfe2c7a17e674875fccc756",
"assets/assets/images/kabeerb.jpeg": "ca2a92c0289c50ae2ada87432989bf9a",
"assets/assets/images/kaber.png": "e6648cd5c72ccad27fc87cb977b1c5fa",
"assets/assets/images/linke.png": "ca08559d88ae54324f451b9757f2e42f",
"assets/assets/images/linkedn1.png": "5cef611c0c44d09b5691b70cc1408a2b",
"assets/assets/images/login%2520copy.jpg": "0fb348030d3135c20a5c4346b69d89a7",
"assets/assets/images/login.jpg": "0fb348030d3135c20a5c4346b69d89a7",
"assets/assets/images/m.png": "aeaf74b58fdcf50c8d8013eb809d868a",
"assets/assets/images/m1.png": "cc3c713e18b2d81addba883a7b4f4a72",
"assets/assets/images/mq.png": "be4a7f93cb6157571a0f834f5dc4d987",
"assets/assets/images/p1%2520copy.png": "19f70d56e62b254f33186122fa135ace",
"assets/assets/images/p1.png": "19f70d56e62b254f33186122fa135ace",
"assets/assets/images/p2%2520copy.png": "cdf1ccbda970a72f44d2a1a18cd3b487",
"assets/assets/images/p2.png": "cdf1ccbda970a72f44d2a1a18cd3b487",
"assets/assets/images/p3%2520copy.png": "70bab81a8e79b0af60dcee021f3f47b0",
"assets/assets/images/p3.png": "70bab81a8e79b0af60dcee021f3f47b0",
"assets/assets/images/p4%2520(1).png": "77e449fd8be4b9225857b64b0731c6b4",
"assets/assets/images/p4.png": "77e449fd8be4b9225857b64b0731c6b4",
"assets/assets/images/p5%2520(1).png": "51f8e9f65f28d8f6b7b4f640003b4c03",
"assets/assets/images/p5.png": "51f8e9f65f28d8f6b7b4f640003b4c03",
"assets/assets/images/pg2%2520copy%25202.jpg": "ef5de05f00b33f5b77afccaf9b5a1267",
"assets/assets/images/pg2%2520copy.jpg": "ef5de05f00b33f5b77afccaf9b5a1267",
"assets/assets/images/pg2.jpg": "ef5de05f00b33f5b77afccaf9b5a1267",
"assets/assets/images/php.png": "acf7498ba522e7d489c835342cd21b47",
"assets/assets/images/post%2520copy.png": "b3c67f66b147b120de0d562dc871be02",
"assets/assets/images/post.png": "2967240be208d96adbbaf852da3ec56f",
"assets/assets/images/post1.png": "083727a7bfb4907a7a6bf46aa5a0e61b",
"assets/assets/images/postman.png": "9b95485e7c766c5f650d40d30b1d8ce2",
"assets/assets/images/posts.png": "41f153808a98328ecff5b2cb6faafa9e",
"assets/assets/images/profile1.png": "73abbaa54d672126fd39b5f72a764077",
"assets/assets/images/r1.png": "8929e29637c72b4433eaa96609aa2275",
"assets/assets/images/r2.png": "e9bef383de852f6af63fe23435fc1d02",
"assets/assets/images/r3.png": "cfbd4ac1ffb4ec61c0b2ddd364ef4ada",
"assets/assets/images/r4.png": "d3451d6227d75e1a06d65517cd8a4fe0",
"assets/assets/images/r5.png": "9c2f427cc96103e4001995e29cee7eb2",
"assets/assets/images/r6.png": "c01c23574f04f5f80ea74bdc1010bf08",
"assets/assets/images/r7.png": "e1b9c4a02f56db5d6655e476424acb38",
"assets/assets/images/r8.png": "1c6761c83d93deab5b37cf079ad5fd25",
"assets/assets/images/r9.png": "cbd885595df438f4353df68bf994e9a3",
"assets/assets/images/rs.png": "17c97394649ded74bfcc09182aaa4ef7",
"assets/assets/images/s%2520copy.PNG": "253c2e43761c7f82e1532a5a08787a4c",
"assets/assets/images/s.PNG": "253c2e43761c7f82e1532a5a08787a4c",
"assets/assets/images/school%2520copy.png": "99329d6e7f02a2a123cd53ab6d2b18be",
"assets/assets/images/school.png": "99329d6e7f02a2a123cd53ab6d2b18be",
"assets/assets/images/show.png": "a67eed550301c95e4b0fabec311c5522",
"assets/assets/images/ss.png": "25a975a18b4cc2ba7ee4990ec639150c",
"assets/assets/images/sup%2520copy.jpg": "f388a46bf0b50e6ed2edc8cf6e6e1890",
"assets/assets/images/sup.jpg": "f388a46bf0b50e6ed2edc8cf6e6e1890",
"assets/assets/images/sw.png": "0f48b3734c8bb087796e093db7b164f7",
"assets/assets/images/swa.png": "7f46b0d37ac9599ba72846695a8ef3e9",
"assets/assets/images/todo.PNG": "672ee85012c1aa3ae41f03ac27fea0b4",
"assets/assets/images/uni%2520copy.jpeg": "2d9290f5039842c16f0650505b012e2e",
"assets/assets/images/uni.jpeg": "2d9290f5039842c16f0650505b012e2e",
"assets/assets/images/uvas%2520copy.webp": "6779ea3ad7123b605e924631cdd1627a",
"assets/assets/images/uvas.webp": "6779ea3ad7123b605e924631cdd1627a",
"assets/assets/images/Vector.png": "3032bda7bf2a8e4dd515be3f18b747b9",
"assets/assets/images/virtual.jpg": "78bc031f23b2854177dfa9141cbdb277",
"assets/assets/images/virtuall%2520copy.jpg": "2b90beacfd34f41371a72428ef10631a",
"assets/assets/images/virtuall.jpg": "2b90beacfd34f41371a72428ef10631a",
"assets/assets/images/vs.png": "bb28713a8d28d8e9bdcd06fa95a50178",
"assets/assets/images/w.PNG": "9912c8ae66a795e7aae6469c015386d5",
"assets/assets/images/whatsapp%2520copy.png": "3812afe10e1a1eff31249f2f069c2b15",
"assets/assets/images/whatsapp.png": "c56fcba5dbd7077c7d3da5e99f968dfd",
"assets/FontManifest.json": "a260b7495fa8a69a34f0756b9e2bf3c4",
"assets/fonts/MaterialIcons-Regular.otf": "f9e4164edfcf5f4b6e7b1bf308e7fdf5",
"assets/fonts/noto.ttf": "bbd33d2c51f17e813f44092cd7cc5efa",
"assets/fonts/roboto.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/fonts/sora1.ttf": "8569cb014b6e06cfd0e5b26805e96ca0",
"assets/fonts/sora2.ttf": "457ec8aa0c5f1e074d19e55183f245fe",
"assets/fonts/sorat.ttf": "4d6461db63e84ae9df86ca7e37248cd1",
"assets/fonts/sta/OpenSans_Condensed-Bold.ttf": "9a8b3d4395da2a08ae86ec6392408b78",
"assets/fonts/sta/OpenSans_Condensed-Regular.ttf": "f9a3a9e32baf605db0382cd39021424a",
"assets/fonts/static/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/NOTICES": "620ab785d9dd6141b0fa28b64b79decd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "9995071a7dd11109953ace3d4a775cfc",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c4f80bd9736c394096fb1fe075d36c65",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82a413bf38f41189ce7ac85641c33704",
"/": "82a413bf38f41189ce7ac85641c33704",
"main.dart.js": "3ddbbe2931476d52497997e5eeadb8ce",
"manifest.json": "5de43572e2003bb52e17931b79610223",
"version.json": "4fce62dd7cb3b76b2bf054899294c6b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
