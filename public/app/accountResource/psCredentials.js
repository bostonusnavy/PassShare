angular.module('app').factory('psCredentials', function ($resource) {
    var credentialsResource = $resource('/api/credentials/:id', {_id: '@id'}, {
        update: {method:'PUT', isArray:false}
    });

    return AccountResource;
});