var axios = require('axios');
var config = require('../settings/configuracion').Obtener();
var NodeCache = require("node-cache");
var areaMapper = require('../mappers/areaMapper');
const cacheAreas = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Areas {

    async ObtenerTodas() {
        try {
            var areas = cacheAreas.get("areas", true);
            return areas;
        } catch (err) {
            var res = await axios.get(`${config.CMS}/area`);
            var areas = res.data.map(function (area) {
                return areaMapper.MapearArea(area);
            });   
            cacheAreas.set("areas", areas, config.CACHE_AREAS)  
            return areas;   
        }
    }

    async Obtener(nombre) {
        var areas = await this.ObtenerTodas();
        return areas.find(x => x.Path === nombre.toLowerCase());
    }

    async ObtenerTodasPosiciones() {
        try {
            var posiciones = cacheAreas.get("posiciones", true);
            return posiciones;
        } catch (err) {
            var res = await axios.get(`${config.CMS}/area`);
            var posiciones = res.data.map(function (area) {
                return areaMapper.MapearPosiciones(area);
            }); 

            cacheAreas.set("posiciones", posiciones, config.CACHE_AREAS)
            return posiciones;
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