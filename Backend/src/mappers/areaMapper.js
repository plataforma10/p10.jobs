class AreaMapper {
    MapearArea (area) {
        var posiciones = area.posicions.map(function (posicion) { 
            return this.MapearPosicion(posicion);                      
        }.bind(this));
        return {
            Nombre: area.Nombre,
            Descripcion: area.Descripcion,
            FechaCreacion: area.createdAt,
            Posiciones: posiciones
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