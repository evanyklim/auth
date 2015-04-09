var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth-workshop');
mongoose.connection.on('error', console.error.bind(console, "connection error: "));

var Schema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('userProfile', Schema);
