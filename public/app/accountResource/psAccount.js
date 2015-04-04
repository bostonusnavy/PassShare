angular.module('app').factory('psAccount', function ($resource) {
    var AccountResource = $resource('/api/accounts/:id', {_id: '@id'}, {
        update: {method:'PUT', isArray:false}
    });

    return AccountResource;
});