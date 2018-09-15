var router = require("express").Router();
var jiraService = require('../service/jiraService');
var success = require('../helpers/responseHelper');

router.post('/jira/:nombre/:apellido/:email/:archivo', async function(req, res, next){
    try {
        var jira = await jiraService.CrearIssue(
            req.params.nombre,
            req.params.apellido,
            req.params.email,
            req.params.archivo
        );

        success(jira, res, next);
    }
    catch(err) {
        next(err);
    }
});

 module.exports = router; 