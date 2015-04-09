var path = require('path');
var express = require('express');
var app = express();

var routes = require('./server');

app.get('/', routes);



app.listen(3000, function () {
	console.log('the server is now initialized and listening on port 3000');
});

