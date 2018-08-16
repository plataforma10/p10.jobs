var axios = require('axios');
var config = require('../settings/configuracion').Obtener(process.env.NODE_ENV);
var slugify = require('../helpers/slugify');
var NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

class Header {
    Obtener(success, error) {
        try {
            var header = cache.get("header", true)
        }
        catch (err) {
            axios.get(`${config.CMS}/header`)
                .then((response) => {
                    cache.set("header", response.data, config.CACHE_HEADER)
                    return response.data;
                })
                .catch((err) => {
                    error(err);
                });
        }
    }
}

module.exports = new Header();