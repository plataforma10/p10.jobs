var router = require("express").Router();
var areasService = require('../service/areasService');

router.get('/', function(req, res, next){
    areasService.ObtenerTodas(
        (areas) => { 
            if (areas) {
                res.json(areas);
                return;
            }
            next();
        }, next);
});

router.get('/:nombre', function(req, res, next){
    areasService.Obtener(req.params.nombre, 
        (area) => { 
            if (area) {
                res.json(area);
                return;
            }
            next(); 
        }, next);
});

router.get('/:nombre/:posicion', function(req, res, next){    
    areasService.ObtenerPosicion(req.params.nombre, req.params.posicion,
        (posicion) => {
            if (posicion) {
                res.json(posicion);
                return;
            }
            next();
        }, next);
});

module.exports = router;