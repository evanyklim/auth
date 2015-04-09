var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('userProfile', Schema);
