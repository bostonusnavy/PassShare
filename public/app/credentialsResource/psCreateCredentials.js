angular.module('app').factory('psCreateCredentials', function ($q, $window, psIdentity, psCredentials) {

    var currentCredentials;
    if (!!$window.bootstrappedCredentialsObject) {
        currentCredentials = new psCredentials();
        angular.extend(currentCredentials, $window.bootstrappedCredentialsObject);
    }

    return {
        //
        //currentUser: currentUser,
        //isAuthenticated: function () {
        //    return !!this.currentUser;
        //},
        //isAuthorized: function (role) {
        //    return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        //},

        createCredentials: function (newCredentialsData) {
            var newCredentials = new psCredentials(newCredentialsData);
            var dfd = $q.defer();

            newCredentials.$save().then(function () {
                currentCredentials = newCredentials;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        }


    }
});