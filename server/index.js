var path = require('path');
var router = require('express').Router();
var userProfile = require('../models');
var crypto = require('crypto');

var indexHtmlPath = path.join(__dirname, '../templates/index.html');
var signupHtmlPath = path.join(__dirname, '../templates/signup.html');
var loginHtmlPath = path.join(__dirname, '../templates/login.html');
var successHtmlPath = path.join(__dirname, '../templates/success.html');
var failureHtmlPath = path.join(__dirname, '../templates/failure.html');

function hashAway (pwdByUser) {
	return crypto.pbkdf2Sync(pwdByUser, '', 0, 16).toString('base64');
}

router.get('/', function (req, res, next) {

	res.sendFile(indexHtmlPath);
});

router.get('/signup', function (req, res, next) {

	res.sendFile(signupHtmlPath);
});

router.post('/signup', function (req, res, next) {	

    var userObj = {
    	username: req.body.username,
    	password: hashAway(req.body.password)
    };

	userProfile.create(userObj, function(err, user) {
		if (err) return next(err);

		res.redirect('/success');
	});
});

router.get('/login', function (req, res, next) {

	res.sendFile(loginHtmlPath);
});

router.post('/login', function (req, res, next) {
	userProfile.findOne( { username: req.body.username } , function(err, user) {
		if (err) return next(err);
		if (!user) { res.redirect('/failure'); }
		else {

			if (hashAway(req.body.password) === user.password) {
				res.redirect('/success'); 
			} else {
				res.redirect('/failure');
			}
		}
	});
});

router.get('/success', function (req, res) {
	res.sendFile(successHtmlPath);
});

router.get('/failure', function(req, res) {
	res.sendFile(failureHtmlPath);
});

module.exports = router;