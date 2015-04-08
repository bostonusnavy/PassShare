var auth = require('./auth'),
    mongoose = require('mongoose'),
    users = require('../controllers/users'),
    User = mongoose.model('User'),
    credentials = require('../controllers/credentials'),
    Credentials = mongoose.model('Credentials');

module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/credentials', credentials.getCredentials);
    app.post('/api/credentials', credentials.createCredentials);
    //app.put('/api/credentials', credentials.updateCredentials);

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user,
            bootstrappedCredentials: req.credentials
        });
    });
};