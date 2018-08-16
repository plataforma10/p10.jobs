var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
var slugify = require('../helpers/slugify');
var NodeCache = require("node-cache");
var areaMapper = require('../mappers/areaMapper');
const cacheAreas = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Areas {

    ObtenerTodas(error) {
        try {
            var areas = cacheAreas.get("areas", true);
            return areas;
        } catch (err) {
            return axios.get(`${config.CMS}/area`)
                .then((response) => {
                    var areas = response.data.map(function (area) {
                        return areaMapper.MapearArea(area);
                    });
                    cacheAreas.set("areas", areas, config.CACHE_AREAS)
                    return areas;
                })
                .catch((err) => {
                    error(err);
                });
        }
    }

    async Obtener(nombre, error) {
        var areas = await this.ObtenerTodas(error);
        var area = areas.find(x => slugify(x.Nombre) === nombre.toLowerCase());
        return area;
    }

    async ObtenerPosicion(nombre, titulo, error) {
        var area = await this.Obtener(nombre, error);
        var posicion = area.Posiciones.find(x => slugify(x.Titulo) == titulo.toLowerCase());
        return posicion;
    }
}

module.exports = new Areas();