class Configuracion {
    Obtener() {
        return {
            PORT: process.env.PORT || 8081,
            CMS: process.env.CMS || "http://localhost:1337",
            FRONT: process.env.FRONT || "http://localhost:8080",
            CACHE_AREAS: process.env.CACHE_AREAS || 600,
            CACHE_ARECACHE_HEADERAS: process.env.CACHE_HEADER || 600
        };
    }
}

module.exports = new Configuracion(); 