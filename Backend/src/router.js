var router = require("express").Router();
var areasController = require('./controllers/areasController');
var headerController = require('./controllers/headerController');

router.use('/area', areasController);
router.use('/header', headerController);

router.use(function(req, res) {
    res.status(404).send('Not Found');
});

router.use(function(err, req, res) {
    console.log(err);
    res.status(500).send('Internal Server Error');
}); 

module.exports = router;