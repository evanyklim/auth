var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

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

app.use(cookieParser());
app.use(session({
    // resaving forces a session save after every response
    //  something we won't need here
    resave: false,
    // we also won't save a session just because there's
    //  a new client to care about
    // we will only save the session once it has some 
    //  data associated with it
    saveUninitialized: false,
    // our session will be encrypted with this secret
    secret: 'tongiscool'
    // cookie: {
    //     // the cookie itself should be transmitted
    //     //  securely---this will only truly work if 
    //     //  we have https enabled, which we should
    //     secure: true
    // }
}));

app.use(logger('dev'));

app.use('/', routes);

app.listen(3000, function () {
	console.log('the server is now initialized and listening on port 3000');
});

// https.createServer(options, app).listen(3000, function () {
// 	console.log('the server is somewhat more secure... and listening on port 3000');
// });
