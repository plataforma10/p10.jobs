var router = require("express").Router();
var headerService = require('../service/headerService');
var success = require('../helpers/responseHelper');

router.get('/headers', async function (req, res, next) {
    try {
        var header = await headerService.Obtener();
        success(header, res, next);
    } catch (err) {
        next(err);
    }
});

router.get('/header/home', async function (req, res, next) {
    try {
        var header = await headerService.ObtenerHome();
        success(header, res, next);
    } catch (err) {
        next(err);
    }
});

module.exports = router;