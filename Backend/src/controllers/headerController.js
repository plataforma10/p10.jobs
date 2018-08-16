var router = require("express").Router();
var headerService = require('../service/headerService')

router.get('/', function (req, res, next) {
    headerService.Obtener(
        (header) => {
            if (header) {
                res.json(header);
                return;
            }
            next();
        }, next);
});

module.exports = router;