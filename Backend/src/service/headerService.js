var axios = require('axios');
var config = require('../settings/configuracion').Obtener();
var NodeCache = require("node-cache");
var headerMapper = require("../mappers/headerMapper");
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Header {
    async Obtener() {
        try {
            var header = cache.get("headers", true);
            return header;
        }
        catch (err) {
            var res = await axios.get(`${config.CMS}/header`);
            var headers = res.data.map(function (header) {
                return headerMapper.MapearHeader(header, config.UPLOAD);
            });
            cache.set("headers", headers, config.CACHE_HEADER)
            return headers;
        }
    }

    async ObtenerHome() {
        var headers = await this.Obtener();
        var header = headers.find(x => x.Seccion === "Home");
        return header;
    }
}

module.exports = new Header();