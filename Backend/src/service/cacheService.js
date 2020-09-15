var NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class CacheService {
    Get(clave){
        return cache.get(clave, true);
    }
    Set(clave, valor, expiracion) {
        if(valor || valor.length > 0)
            cache.set(clave, valor, expiracion);
            
        return valor;
    }
}

module.exports = new CacheService();