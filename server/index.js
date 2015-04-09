var path = require('path');
var router = require('express').Router();
var models = require('../models');
var user = models.userProfile;
var indexHtmlPath = path.join(__dirname, '../templates/index.html');

router.get('/', function (req, res, next) {

	res.sendFile(indexHtmlPath);
});

module.exports = router;