var Credentials = require('mongoose').model('Credentials');

exports.getCredentials = function (req, res) {
    Credentials.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

exports.createCredentials = function (req, res) {
    var credentialsData = req.body;

    Credentials.create(credentialsData, function(err, credentials) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate credentials username exists');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
    })
};