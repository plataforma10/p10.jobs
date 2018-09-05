var compression = require('compression');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require("path");
app.use(compression());

var DIST_DIR = path.join(__dirname, "public");

app.use("/*.jsgz", (req, res, next) => {
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/public', express.static(DIST_DIR));

app.get('/*', function(req, res){
  res.sendFile(path.join(DIST_DIR, "index.html"));    
});

server.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!\n');
});