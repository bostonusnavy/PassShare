angular.module('app').controller("psSignupCtrl", function ($scope, psUser, psNotifier, $location, psAuth) {

    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        psAuth.createUser(newUserData).then(function () {
            psNotifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            psNotifier.error(reason);
        })
    }
});