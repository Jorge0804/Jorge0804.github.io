var url = window.location.href; //obtenemos todo el url
var pwaLocation = 'https://jorge0804.github.io/sw.js'; //path donde se encuentra el sw en GitHub
 
if(url.includes('localhost')){
    pwaLocation = '/sw.js';
}
navigator.serviceWorker.register(pwaLocation);