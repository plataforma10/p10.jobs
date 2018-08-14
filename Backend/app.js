var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var routes = require("./src/router");
var config = require('./src/settings/configuracion').Obtener(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.FRONT);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(routes);

// Serve the files on port 3000.
server.listen(config.PORT, function () {
    console.log('App listening on port:' + config.PORT + '!\n');
});