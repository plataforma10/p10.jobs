class HeaderMapper {
    MapearHeader (header, host){
        return {
            Titulo: header.Titulo,
            Descripcion: header.Descripcion,
            Imagen: host + header.Imagen.url,
            Seccion: header.Seccion
        }
    }
}

module.exports = new HeaderMapper();