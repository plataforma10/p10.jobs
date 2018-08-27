var headerMapper = require("../mappers/headerMapper");
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);

class AreaMapper {
    MapearArea (area) {
        var posiciones = area.Posiciones.map(function (posicion) { 
            return this.MapearPosicion(posicion);                     
        }.bind(this));
        var header = area.Header ? headerMapper.MapearHeader(area.Header, config.CMS) : undefined; 
        return {
            Nombre: area.Nombre,
            Descripcion: area.Descripcion,
            FechaCreacion: area.createdAt,
            Posiciones: posiciones,
            Header: header
        }
    }

    MapearPosicion (posicion) {
        return {
            Titulo: posicion.Titulo,
            Descripcion: posicion.Descripcion,
            FechaCreacion: posicion.createdAt
        }
    }
}

module.exports = new AreaMapper();