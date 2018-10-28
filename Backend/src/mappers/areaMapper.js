var headerMapper = require("../mappers/headerMapper");
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
var slugify = require('../helpers/slugify');

class AreaMapper {
    MapearArea (area) {
        var header = area.Header ? headerMapper.MapearHeader(area.Header, config.UPLOAD) : undefined; 
        return {
            Nombre: area.Nombre,
            SubTitulo: area.SubTitulo,
            Path: slugify(area.Nombre),
            Descripcion: area.Descripcion,
            FechaCreacion: area.createdAt,
            Header: header,
            Activa: area.Activa
        }
    }

    MapearPosiciones (area) {
        var posiciones = area.Posiciones.map(function (posicion) { 
            return this.MapearPosicion(posicion);                     
        }.bind(this));

        return {
            PathArea: slugify(area.Nombre),
            Posiciones: posiciones
        }
    }

    MapearPosicion (posicion) {
        return {
            Titulo: posicion.Titulo,
            Path: slugify(posicion.Titulo),
            Descripcion: posicion.Descripcion,
            FechaCreacion: posicion.createdAt,
            Localidad: posicion.Localidad,
            Activa: posicion.Activa
        }
    }
}

module.exports = new AreaMapper();