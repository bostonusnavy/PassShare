angular.module('app').factory('psIdentity', function ($window, psUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject){
        currentUser = new psUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});