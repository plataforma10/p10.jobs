class HeaderMapper {
    MapearHeader (header, host){
        return {
            Titulo: header.Titulo,
            Descripcion: header.Descripcion,
            Imagen: host + header.Imagen.url
        }
    }
}

module.exports = new HeaderMapper();