
// Ciclo de vida del SW



self.addEventListener('install' , event => {



    const instalacion = new Promise((resolve, reject) => {
        
        setTimeout(()=> {
            console.log('Instalaciones listas...');
            self.skipWaiting();
            resolve();
        }, 1);

    });
    // console.log(event);
    // console.log('Instalando el SW:');

    event.waitUntil( instalacion );
    // esperamos que la promesa de arriba se resuelva
});


// active
self.addEventListener('activate' , event => {
    
    // console.log(event);
    
    // este método sirve para borrar cache viejo
    console.log('SW: activo y listo para controlar la app!!')
});


// fetch: manejo de petiones HTTP

self.addEventListener('fetch', (event) => {
    console.log('SW:', event.request.url );

    if(event.request.url.includes('https://reqres.in/')  ){

        const resp = new Response(`{ok: false, mesaje: 'jajaj'}`);

        event.respondWith(resp);
    }

});

