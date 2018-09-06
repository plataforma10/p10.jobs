var router = require("express").Router();
var areasService = require('../service/areasService');
var success = require('../helpers/responseHelper');

router.get('/areas', async function (req, res, next) {
    var areas = await areasService.ObtenerTodas();

    success(areas, res, next);
});

router.get('/area/:area', async function (req, res, next) {
    var area = await areasService.Obtener(
        req.params.area);

    success(area, res, next);
});

router.get('/area/:area/posiciones', async function (req, res, next) {
    var posiciones = await areasService.ObtenerPosicionesArea(req.params.area);
    success(posiciones, res, next);
});

router.get('/area/:area/posicion/:posicion', async function (req, res, next) {
    var posicion = await areasService.ObtenerPosicion(
        req.params.area,
        req.params.posicion);

    success(posicion, res, next);
});

module.exports = router;