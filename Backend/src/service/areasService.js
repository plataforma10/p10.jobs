var axios = require('axios');
var areaMapper = require('../mappers/areaMapper');
var cacheService = require('./cacheService');

class Areas {

    async ObtenerTodas() {
        try {
            return cacheService.Get("areas");
        } catch (err) {
            var res = await axios.get(`${process.env.CMS}/area`);
            
            var areas = res.data            
                .filter(x => x.Activa && x.Posiciones.length > 0)
                .map(area => areaMapper.MapearArea(area));

            return cacheService.Set("areas", areas, process.env.CACHE_AREAS);   
        }
    }

    async Obtener(nombre) {
        var areas = await this.ObtenerTodas();
        return areas.find(x => x.Path === nombre.toLowerCase());
    }

    async ObtenerTodasPosiciones() {
        try {
            return cacheService.Get("posiciones");;
        } catch (err) {
            var res = await axios.get(`${process.env.CMS}/area`);

            var posiciones = res.data.map(function (area) {
                return areaMapper.MapearPosiciones(area);
            }); 

            return cacheService.Set("posiciones", posiciones, process.env.CACHE_AREASS); 
        }
    }
    
    async ObtenerPosicionesArea(nombre) {
        var areas = await this.ObtenerTodasPosiciones();
        var area = areas.find(x => x.PathArea == nombre.toLowerCase());
        return area.Posiciones;
    } 

    async ObtenerPosicion(nombre, titulo) {
        var posiciones = await this.ObtenerPosicionesArea(nombre);
        var posicion = posiciones.find(x => x.Path == titulo.toLowerCase());
        return posicion;
    }
}

module.exports = new Areas();