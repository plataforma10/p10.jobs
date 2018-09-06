var axios = require('axios');
var config = require('../settings/configuracion').Obtener();
var NodeCache = require("node-cache");
var headerMapper = require("../mappers/headerMapper");
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Header {
    Obtener() {
        try {
            var header = cache.get("header", true);
            return {
                status: 200,
                data: header
            };
        }
        catch (err) {
            return axios.get(`${config.CMS}/header`)
                .then((response) => {
                    var header = response.data.map(function (header) {
                        return headerMapper.MapearHeader(header, config.UPLOAD);
                    });
                    cache.set("header", header, config.CACHE_HEADER)
                    return {
                        status: 200,
                        data: header
                    };
                })
                .catch((err) => {
                    err.data = [];
                    return err;
                });
        }
    }

    async ObtenerHome() {
        var res = await this.Obtener();
        var header = res.data.find(x => x.Seccion === "Home");
        res.data = header;
        return res;
    }
}

module.exports = new Header();