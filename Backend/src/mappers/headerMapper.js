class HeaderMapper {
    MapearHeader (header){
        return {
            Titulo: header.Titulo,
            Descripcion: header.Descripcion,
            Imagen: process.env.UPLOAD + header.Imagen.url,
            Seccion: header.Seccion
        }
    }
}

module.exports = new HeaderMapper();