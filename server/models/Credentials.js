var mongoose = require('mongoose');

var credentialsSchema = mongoose.Schema({
    username: {type: String, required:'{PATH is required!'},
    password: {type: String, required:'{PATH is required!'}
});

var Credentials = mongoose.model('Credentials', credentialsSchema);

function createDefaultCredentials() {
    Credentials.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            Credentials.create({username: 'test', password: 'test'});
        }
    });
}

exports.createDefaultCredentials = createDefaultCredentials;