var axios = require('axios');
var config = require('../settings/configuracion').Obtener();
var headerMapper = require("../mappers/headerMapper");
var cacheService = require('./cacheService');

class Header {
    async Obtener() {
        try {
            return cacheService.Get("headers");
        }
        catch (err) {
            var res = await axios.get(`${config.CMS}/header`);

            var headers = res.data.map(header => headerMapper.MapearHeader(header, config.UPLOAD));

            return cacheService.Set("headers", headers, config.CACHE_HEADER);
        }
    }

    async ObtenerHome() {
        var headers = await this.Obtener();
        var header = headers.find(x => x.Seccion === "Home");
        return header;
    }
}

module.exports = new Header();