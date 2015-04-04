angular.module('app').controller('psCreateAccount', function ($scope, $http, psNotifier, $location) {

    $scope.createNewAccount = function () {
        var newAccountData = {
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