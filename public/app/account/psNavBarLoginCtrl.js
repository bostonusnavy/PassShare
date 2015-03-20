angular.module('app').controller('psNavBarLoginCtrl', function ($scope, $http, psIdentity, psNotifier, psAuth, $location) {
    $scope.identity = psIdentity;
    $scope.signin = function (username, password) {
        psAuth.authenticateUser(username, password).then(function (success) {
            if(success) {
                psNotifier.notify('You have successfully logged in!');
            } else {
                psNotifier.notify('You have provided an incorrect Username and/or Password...');
            }
        });
    };
    
    $scope.signout = function () {
        psAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            psNotifier.notify("You have successfully logged out.");
            $location.path('/');
        })
    }
});