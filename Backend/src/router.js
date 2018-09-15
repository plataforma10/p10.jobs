var router = require("express").Router();
var areasController = require('./controllers/areasController');
var headerController = require('./controllers/headerController');
var jiraController = require('./controllers/jiraController');

router.use('/', areasController);
router.use('/', headerController);
router.use('/', jiraController)

router.use(function(req, res) {
    res.status(404).send('Not Found');
});

router.use(function(err, req, res) {
    console.log(err);
    res.status(500).send('Internal Server Error');
}); 

module.exports = router;