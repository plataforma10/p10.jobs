var axios = require('axios');
var config = require('../settings/configuracion').Obtener();
var NodeCache = require("node-cache");
var areaMapper = require('../mappers/areaMapper');
const cacheAreas = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Areas {

    ObtenerTodas() {
        try {
            var areas = cacheAreas.get("areas", true);
            return {
                status: 200,
                data: areas
            };
        } catch (err) {
            return axios.get(`${config.CMS}/area`)
                .then((response) => {
                    var areas = response.data.map(function (area) {
                        return areaMapper.MapearArea(area);
                    });                 
                    cacheAreas.set("areas", areas, config.CACHE_AREAS)
                    return {
                        status: 200,
                        data: areas
                    };
                })
                .catch((err) => {
                    err.data = [];
                    return err;
                });
        }
    }

    async Obtener(nombre) {
        var res = await this.ObtenerTodas();
        var area = res.data.find(x => x.Path === nombre.toLowerCase());
        res.data = area ? area : [];
        return res;
    }

    ObtenerTodasPosiciones() {
        try {
            var posiciones = cacheAreas.get("posiciones", true);
            return {
                status: 200,
                data: posiciones
            };
        } catch (err) {
            return axios.get(`${config.CMS}/area`)
                .then((response) => {
                    var posiciones = response.data.map(function (area) {
                        return areaMapper.MapearPosiciones(area);
                    });                 
                    cacheAreas.set("posiciones", posiciones, config.CACHE_AREAS)
                    return {
                        status: 200,
                        data: posiciones
                    };
                })
                .catch((err) => {
                    err.data = [];
                    return err;
                });
        }
    }
    
    async ObtenerPosicionesArea(nombre) {
        var res = await this.ObtenerTodasPosiciones();
        var area = res.data.find(x => x.PathArea == nombre.toLowerCase());
        res.data = area ? area.Posiciones : [];
        return res;
    } 

    async ObtenerPosicion(nombre, titulo) {
        var res = await this.ObtenerPosicionesArea(nombre);
        var posicion = res.data.find(x => x.Path == titulo.toLowerCase());
        res.data = posicion ? posicion : [];
        return res;
    }
}

module.exports = new Areas();