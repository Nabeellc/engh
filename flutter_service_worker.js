'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f19b932e6b375357304e8be778424de",
"version.json": "0fc2c220d92c83c2b7a0e783c69bedf8",
"index.html": "908a766aca5d3f29875a151abc3c9f58",
"/": "908a766aca5d3f29875a151abc3c9f58",
"main.dart.js": "aeb204084434afb2e32539bf850a2d4b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f33cb4b59167fc85c500c37d2bcf131d",
".git/config": "4df16cdc1a5579772a582f2e56cb393f",
".git/objects/95/f33fb16cb17b99cd4ee20fbad533c79bb8d7b0": "1b23def454f5abf05e75b50f1246f6a9",
".git/objects/59/68aae41a2a358624b63045ddd6dc5db7f36816": "fe0923f383b06b0d1dca7537834728a1",
".git/objects/3e/723d75b0a0f5ad63a65200c5820271a68ef8af": "09ea3855345e50fe240e633c19352047",
".git/objects/3e/62b1f43819f2c82a6302c56f7431da8c81629d": "49a95571f702ae5e27351d0a39b22844",
".git/objects/3b/e47a09d85c25cb6d97c9f2ee75644c6b1a27b5": "96a13dfe8884284cbe4c5325dbf6473f",
".git/objects/6a/6fb656520ee08e105da52da9eebc219152897a": "0f3d8d88002a7843ad5281066f00a4e8",
".git/objects/32/32fb437bada2f30f6a912a0102eb78f3af8e7e": "9f4cb4c43617adc9bbf5b2eb6642ef41",
".git/objects/58/2192200c349e6fb4701277e82df532c74d729f": "65180041d22e289146dbab22d1051eda",
".git/objects/33/8e8159b15fdd23972c8b69733515168f100016": "3fdb2104d912a69d8461c3f655a3bf0c",
".git/objects/9c/8d17cc72aeb8b7c54d4d694f2599dee4849654": "023eaea436648be704497921764228c2",
".git/objects/02/006d83fe09c803b10e0ad40acbf67acd367b0e": "f4a88f351fe3dca7148e727a1089ecca",
".git/objects/ac/a44203f6025f3917676fd40dd7996f5b335394": "538de2e75bbf895b35d054da3110e7eb",
".git/objects/d0/e10425768786c13f15be0c7729c543f20a2103": "48e8014ef984fdaca8a0ee2fbbc5c1e2",
".git/objects/b4/a3cb8fba26b30bf2e0464ab5c747b74f3f2586": "3625bd5ad50a9cfb58a3602b45c5a3dc",
".git/objects/d6/17eedb72113fcd6e77ac0791fdd4ef4dd7c31a": "058923e1a862ce9eb6bd1758386f60e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/94a8d48d2f5c7f9efbefd568f628c769d6b46c": "65a3281789ab68ffb161abfb0ffc58cc",
".git/objects/f3/558a91b8ff87832b69678a06a19954e4e7ee49": "1b2c4ba64c838da9f1e44d7982054350",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/48188a35efd5302e4f528482d7e3f3418c8627": "f3104e7e7583ebcc88efce915ffe618d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/ed/9ecd86fcf81280c6aebc04a8bb9d201f5a4e83": "44002fa7284fadd29a92316ed6629942",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/5521692aa6d6fe9212d5d959255bcbc1336438": "a4399088c155cb74718ec5e7d4e136cf",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/197b7f9973755da1ada878ee5976336b5c303c": "2455692154949421c34cf462d486a0be",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/42/b6c5f1f18b9ef3ee222fefea3ed133920c1ab0": "3ab88a0ccad9b090539e4f4b298376f3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/c9dcfdabad75abf218e2734c8a9b7f066602f5": "76fed613afa24912afc0da9426aeb93a",
".git/objects/1a/81ad198b441ef7443ae98658683ea136998e25": "024f239a39f7e3297575f6bec516611c",
".git/objects/17/e4fc791fae6f0f6252a56750693855b0aa0a8c": "0c86313d9ee34889a90edff3b6a6e2a7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1c7e29667521d41b4a63ffc14ac606537a8d78": "310eff75f015fbb897d894b2b992c7ff",
".git/objects/26/58f5a97e255c8532af76d54385ceb877af2014": "7a30bd89276cf582a6d47a9481fa49bb",
".git/objects/26/1fe85481bce280f3cecc14a566bf66bc17f2aa": "80e4f55d2e9018e9276af56460a0d1e9",
".git/objects/81/1fcc452f28502557646da83d077cc1822ab5e7": "5a468f298de9051b6b52e49164ca0f9b",
".git/objects/86/997548521016e2a40ed1b65e79d0460211adea": "27d32afce4e6ac8155f6e18a3de08e7a",
".git/objects/2a/0ade51e2e1cdaa4da75c136eaca6277ef58558": "f3f8f12e5b22aa0a42d2567f849fddbd",
".git/objects/43/ed4f5ee6cb01173b448af26edb9d7459f9d365": "f186d42343e916c98435cd538a94e1b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/b47936cb5ec61ff05c75089fdb62bee10a6187": "07c7c5f72e7ec09485b48be7e3c3d6ce",
".git/objects/96/73aa968f25d1ce7bac6cfe02439385d17a0ce1": "2424128b02bfdc6eb33a12c2ddb0b940",
".git/objects/54/f2d851b95c00f8b7bec9acf4ba859795c71a2b": "97b7d2e283a1509ff3d4cc99e76e7f05",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6c/9800fd6440fcb94c778445750d15e6b0236994": "0ef5fae55eedf080a492fb46ed146b38",
".git/objects/52/f46ed0ce56a28372a309683345caf4525c0543": "8d95ae7813bb96d9fa8489230a85ad3e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/d24ebd1fa4c50ff4fb7797faaae12f6d266108": "8c967a5f012559d20f67b92cfbfffdef",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/7a9552d489d2fe255486ad7d4abb4cd8b13848": "2bea654c25c072dbea3aed1cb950aa69",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/1c331235dc4a89b9a555b3c7a46dc6b7168516": "01ff058ca75968133597b926c8d4d814",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/7e4b97c1fef50f7e0d58620e682c52e2372585": "f986ee945e6afe68da138a817c801cde",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/fa/fbf8da6c8f1d81ae955381b55bdeb0bfa4771d": "acfc1c68e30ea3eec53ca3633997e2a9",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/190b5fe905bb0131126341f3be8ede62df7c4c": "784f8264f4517207d15aa49cdb7b5a6a",
".git/objects/48/5a8b726689e31315985686ef829d78e2761f2d": "c581fdd9a88984e52fd108c355f61130",
".git/objects/70/d93e875fc4b879a8386b296cd757a072afdb8a": "8adcad48e4fbb80cafb0aeb1f5a9b9b9",
".git/objects/70/b93fcdbf8130bed8cd59b9192d7e6ca81fc353": "170a123dda2d22faa8f070dbb19be667",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/8b3ee3fc3d42f7fa2ba049e49fc0701ed98807": "f4ba0bbe31a19f509c16b58dccb5386f",
".git/objects/12/984c19ca8abc8ef644086bdcdd2566a76af3e6": "c4a39c6389db5629f5ecd3865fbfeb8b",
".git/objects/85/0dcbf313941d6519224e25bf202540a6666938": "7f993d6f79ea236e1d90119c090caf01",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/afbfd3cf9ec163e8daa287b7000995feb0936e": "71b2aa8d56c12115054697a8ec53133e",
".git/objects/40/7732cdb25fd0312752156ade48ba1a94d49fba": "67a63bdd774f562a6beee4aaf76c6d8e",
".git/objects/7a/1596104af14ab4e4d1e548a942fc865b66ba15": "227952184323eeea72b64a55412b29c7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a32c1977543e9b8f8641f5209815a5c",
".git/logs/refs/heads/main": "c992da71d5a98f8731a02a46607ac41f",
".git/logs/refs/remotes/origin/main": "1b4d2c3154ff7d06c2efba577a0566da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7535c5fdb1480bfd8e59114bd1203e76",
".git/refs/remotes/origin/main": "7535c5fdb1480bfd8e59114bd1203e76",
".git/index": "2d6917223460f64bc754fa5a8f68395e",
".git/COMMIT_EDITMSG": "f337e9d777c88b1c2c2ca69433906855",
"assets/AssetManifest.json": "f20c4425c604421362697394911fe9f7",
"assets/NOTICES": "6613ca262b5c920251657669d706253d",
"assets/FontManifest.json": "8efb888bdef0a45678107804c42f3d28",
"assets/AssetManifest.bin.json": "05b86b8b77a0c8499fe17c77cc508a4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "18fc4cf1e6a4121490e94b80920a1bad",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "48e3d35035d1cc80fa2e4e539b57dd3b",
"assets/fonts/MaterialIcons-Regular.otf": "1c26451afb9df8aac0239f60efee3d2b",
"assets/assets/images/houseengh.jpeg": "238441173491b7e710ac13bb44fbd652",
"assets/assets/images/virtualhouse2.jpeg": "2eaf4fe87e6a0b710fc2b0f24305df7f",
"assets/assets/images/WhatsApp%2520Image%25202025-04-30%2520at%252014.53.48%2520(2).jpeg": "4adbd67b612de1731784ac2842f7168c",
"assets/assets/images/backgroundviolet.jpeg": "9b748093b27d8edbc87e9ecd18e966f3",
"assets/assets/images/hero_image.jpeg": "f2e7dd37a5012e5c888e0c1fa95ecbe7",
"assets/assets/images/nftimage.jpeg": "ff4bee6bef73f867f6bf18eaa2715a0e",
"assets/assets/images/binance.png": "19f3adae456e43008d90caaa7b78e350",
"assets/assets/images/about%2520image.jpg": "b85cc5d7053b53fd990a3726b6a35fac",
"assets/assets/images/backround_image.jpg": "1d22b4db8f97fdea1782feb972875b62",
"assets/assets/images/blackimg.jpeg": "a75bf33812574e53f21fcaff45bc718b",
"assets/assets/images/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/images/fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/images/virtualhouse.jpeg": "08af270e7c2fd31cd20c60ecd23a845d",
"assets/assets/images/LOGOENGH.jpeg": "7ac9a0a76b3090c49e0dba98b21e75ba",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
