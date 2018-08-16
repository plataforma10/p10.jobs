var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
var slugify = require('../helpers/slugify');
var NodeCache = require( "node-cache" );
var areaMapper = require('../mappers/areaMapper');
const cacheAreas = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Areas {
    ObtenerTodas(success, error) {
        try{
            var areas = cacheAreas.get("areas", true);
            success(areas);
        } catch(err) {
            axios.get(`${config.CMS}/area`)
                .then((response) =>  {
                    var areas = response.data.map(function (area) { 
                        return areaMapper.MapearArea(area);                      
                    });
                    cacheAreas.set("areas", areas, config.CACHE_AREAS)
                    success(areas);
                })
                .catch((err) => {
                    error(err);
                });
        }   
    }

    Obtener(nombre, success, error) {
        this.ObtenerTodas((areas) => {
            var area = areas.find(x => slugify(x.Nombre) === nombre.toLowerCase())
            success(area);
        }, error);
    }

    ObtenerPosicion(nombre, titulo, success, error) {
        this.Obtener(nombre, (area) => {
            var posicion = area.Posiciones.find(x => slugify(x.Titulo) == titulo.toLowerCase());
            success(posicion);
        }, error)
    }
}

module.exports = new Areas();