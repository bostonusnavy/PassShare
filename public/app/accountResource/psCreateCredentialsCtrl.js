angular.module('app').controller('psCreateCredentialsCtrl', function ($scope, $http, psNotifier, $location) {

    $scope.createCredentials = function () {
        var newCredentialsData = {
            username: $scope.username,
            password: $scope.password
        };


        //Make an AJAX Request




        //createAccount(newAccountData).then(function () {
        //    psNotifier.notify("New Account Created!");
        //    $location.path('/accounts');
        //}, function (reason) {
        //    psNotifier.error(reason)
        //})
    }
});