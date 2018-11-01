var axios = require('axios');
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
            var res = await axios.get(`${process.env.CMS}/header`);
            var headers = res.data.map(function (header) {
                return headerMapper.MapearHeader(header);
            });
            cache.set("headers", headers, process.env.CACHE_HEADER)
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