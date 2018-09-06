var router = require("express").Router();
var headerService = require('../service/headerService');
var success = require('../helpers/responseHelper');

router.get('/', async function (req, res, next) {
    var header = await headerService.Obtener();

    success(header, res, next);
});

router.get('/home', async function (req, res, next) {
    var header = await headerService.ObtenerHome();
    success(header, res, next);
});

module.exports = router;