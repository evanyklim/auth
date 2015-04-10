var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var routes = require('./server');
//var https = require('https');
//var http = require('http');
// var fs = require('fs');

// var kkey = fs.readFileSync('key.pem').toString();
// var ccert = fs.readFileSync('cert.pem').toString();

// var options = {
//   key: kkey,
//   cert: ccert
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, function () {
	console.log('the server is now initialized and listening on port 3000');
});

// https.createServer(options, app).listen(3000, function () {
// 	console.log('the server is somewhat more secure... and listening on port 3000');
// });
