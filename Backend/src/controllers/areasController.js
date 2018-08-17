var router = require("express").Router();
var areasService = require('../service/areasService');
var success = require('../helpers/responseHelper');

router.get('/', async function (req, res, next) {
    var areas = await areasService.ObtenerTodas();

    success(areas, res, next);
});

router.get('/:nombre', async function (req, res, next) {
    var area = await areasService.Obtener(
        req.params.nombre);

    success(area, res, next);
});

router.get('/:nombre/:posicion', async function (req, res, next) {
    var posicion = await areasService.ObtenerPosicion(
        req.params.nombre,
        req.params.posicion);

    success(posicion, res, next);
});

module.exports = router;