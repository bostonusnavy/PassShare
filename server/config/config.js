var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/passshare',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://rdegroot:passshare@ds031117.mongolab.com:31117/passshare',
        port: process.env.PORT || 80
    }
};