var router = require("express").Router();
var areasService = require('../service/areasService');
var success = require('../helpers/responseHelper');

router.get('/areas', async function (req, res, next) {
    try {
        var areas = await areasService.ObtenerTodas();
        success(areas, res, next);
    }
    catch (err) {
        next(err);
    }
});

router.get('/area/:area', async function (req, res, next) {
    try {
        var area = await areasService.Obtener(
            req.params.area);
    
        success(area, res, next);
    }
    catch (err) {
        next(err);
    }
});

router.get('/area/:area/posiciones', async function (req, res, next) {
    try {
        var posiciones = await areasService.ObtenerPosicionesArea(req.params.area);
        success(posiciones, res, next);
    }
    catch (err) {
        next(err);
    }
});

router.get('/area/:area/posicion/:posicion', async function (req, res, next) {
    try {
        var posicion = await areasService.ObtenerPosicion(
            req.params.area,
            req.params.posicion);

        success(posicion, res, next);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;