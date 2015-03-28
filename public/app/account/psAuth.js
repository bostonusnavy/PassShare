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
        
        createUser: function (newUserData) {
            var newUser = new psUser(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function () {
                psIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentUser: function (newUserData) {
            var dfd = $q.defer();

            var clone = angular.copy(psIdentity.currentUser);
            angular.extend(clone, newUserData);
            clone.$update().then(function () {
                psIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
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
        },
        authorizeAuthenticatedUserForRoute: function() {
            if(psIdentity.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('Not Authenticated');
            }
        }
    }
});