var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var routes = require('./server');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, function () {
	console.log('the server is now initialized and listening on port 3000');
});

