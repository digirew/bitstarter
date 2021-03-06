var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var content = fs.readFileSync('index.html', 'utf8');
app.use('/public',express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
