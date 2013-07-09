var express = require('express');
var fs = require( 'fs' )

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var tbuffer = fs.readFileSync( 'index.html')
  tbuffer = fs.readFileSync( 'index.html' )
  tstr = tbuffer.toString()  
  response.send( tstr );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});