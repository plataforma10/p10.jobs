var router = require("express").Router();
var areasService = require('../service/areasService');

router.get('/', async function (req, res, next) {
    var areas = await areasService.ObtenerTodas(next);

    success(areas, res, next);
});

router.get('/:nombre', async function (req, res, next) {
    var area = await areasService.Obtener(
        req.params.nombre,
        next);

    success(area, res, next);
});

router.get('/:nombre/:posicion', async function (req, res, next) {
    var posicion = await areasService.ObtenerPosicion(
        req.params.nombre,
        req.params.posicion,
        next);

    success(posicion, res, next);
});

success = (item, res, next) => {
    if (item) {
        res.json(item);
        return;
    }
    next();
}

module.exports = router;