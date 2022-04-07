const CACHE_NAME = 'cache-1';
const CACHE_DYNAMIC = 'dynamic-1';
const CACHE_INMUTABLE = 'inmutable-1';
const APP_SHELL = ['/', 'index.html', '/css/style.css', '/images/favicon.ico', 
'/js/app.js', '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'];
const APP_INMUTABLE = ['https://fonts.googleapis.com/css?family=Quicksand:300,400',
'https://fonts.googleapis.com/css?family=Lato:400,300',
'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css', 
'/js/libs/jquery.js'];

self.addEventListener('install', event =>{
    const cacheApp = caches.open(CACHE_NAME).then(cache =>{
        cache.addAll(APP_SHELL);
    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache => {
        cache.addAll(APP_INMUTABLE);
    });

    event.waitUntil(Promise.all([cacheApp, cacheInmutable]));
});

self.addEventListener('activate', event => {
    //HOLA (:
});