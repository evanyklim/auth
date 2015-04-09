var path = require('path');
var router = require('express').Router();
var models = require('../models');
var user = models.userProfile;
var indexHtmlPath = path.join(__dirname, '../templates/index.html');
var signupHtmlPath = path.join(__dirname, '../templates/signup.html');

router.get('/', function (req, res, next) {

	res.sendFile(indexHtmlPath);
});

router.get('/signup', function (req, res, next) {

	res.sendFile(signupHtmlPath);
});

router.post('/signup', function (req, res, next) {

	console.log(req.body);
})

module.exports = router;