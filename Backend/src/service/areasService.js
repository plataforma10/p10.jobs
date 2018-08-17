var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
var slugify = require('../helpers/slugify');
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
        var area = res.data.find(x => slugify(x.Nombre) === nombre.toLowerCase());
        res.data = area ? area : [];
        return res;
    }

    async ObtenerPosicion(nombre, titulo) {
        var res = await this.Obtener(nombre);
        var posicion = res.data.find(x => slugify(x.Titulo) == titulo.toLowerCase());
        res.data = posicion ? posicion : [];
        return res;
    }
}

module.exports = new Areas();