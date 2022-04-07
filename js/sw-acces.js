function actualizaCacheDinamico(dynamicCache, request, response){
    if(response.ok){
        //la respuesta tiene data y se debe almacaenar en cache
        return caches.open(dynamicCache).then(cache => {
            cache.put(request,response.clone() );
            return cache.clone();
        });
        return dynamicCache.clone();
    }else{//si no viene nda en la respuesta
        return response;
    }
}