var router = require("express").Router();
var jiraService = require('../service/jiraService');

router.post('/', async function(nombre, apellido, email, archivo){
    var jira = await jiraService.CrearIssue(nombre, apellido, email, archivo);

    success(jira, res, next);
});

module.exports = router;