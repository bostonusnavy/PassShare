var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    username: {type: String, required:'{PATH is required!'},
    password: {type: String, required:'{PATH is required!'}
});

var Account = mongoose.model('Account', accountSchema);