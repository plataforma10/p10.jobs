require('dotenv').config();
var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var routes = require("./src/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONT);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(routes);

// Serve the files on port 3000.
server.listen(process.env.PORT, function () {
    console.log(`App listening on port: ${process.env.PORT}!`);
});