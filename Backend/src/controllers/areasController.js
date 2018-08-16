var router = require("express").Router();
var areasService = require('../service/areasService');

router.get('/', function(req, res, next){
    areasService.ObtenerTodas((areas) => { 
        res.json(areas);
    }, next);
});

router.get('/:nombre', function(req, res, next){
    areasService.Obtener(req.params.nombre, 
        (area) => { 
            success(area, res, next); 
        }, next);
});

router.get('/:nombre/:posicion', function(req, res, next){    
    areasService.ObtenerPosicion(req.params.nombre, req.params.posicion,
        (posicion) => {
            success(posicion, res, next); 
        }, next);
});

success = (item, res, next) => {
    if (item) {
        res.json(item);
        return;
    }
    next();
}

module.exports = router;