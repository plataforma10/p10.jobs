var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
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
                        return headerMapper.MapearHeader(header, config.CMS);
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
}

module.exports = new Header();