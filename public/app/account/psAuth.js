angular.module('app').factory('psAuth', function ($http, psIdentity, $q, psUser) {
    return {
        authenticateUser: function(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function (response) {
                if(response.data.success) {
                    var user = new psUser();
                    angular.extend(user, response.data.user);
                    psIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },
        logoutUser: function() {
            var dfd = $q.defer();
            $http.post('/logout', {logout:true}).then(function () {
                psIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function(role) {
            if(psIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('Not Authorized');
            }
        }
    }
});