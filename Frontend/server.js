var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var DIST_DIR = path.join(__dirname, "public");

app.use(express.static(DIST_DIR));

app.use(function(req, res){
    res.sendFile(path.join(DIST_DIR, "index.html"));    
});

//app.use('*', function(req, res) {
//  res.sendFile(path.join(DIST_DIR, "views/shared/404.html"), 404);
//}); 

app.use(function(err, req, res, next) {
  console.log(err);
    //res.sendFile(path.join(DIST_DIR, "views/shared/500.html"), 500);
}); 

// Serve the files on port 3000.
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!\n');
});