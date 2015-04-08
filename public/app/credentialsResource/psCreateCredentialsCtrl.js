angular.module('app').controller('psCreateCredentialsCtrl', function ($scope, psCredentials, psCreateCredentials, psNotifier, $location) {

    $scope.createNewCredentials = function () {
        var newCredentialsData = {
            username: $scope.username,
            password: $scope.password
        };

        psCreateCredentials.createCredentials(newCredentialsData).then(function () {
            psNotifier.notify('Credentials have been created!');
            $location.path('/credentials');
        }, function (reason) {
            psNotifier.error(reason)
        });

        //Make an AJAX Request




        //createAccount(newAccountData).then(function () {
        //    psNotifier.notify("New Account Created!");
        //    $location.path('/accounts');
        //}, function (reason) {
        //    psNotifier.error(reason)
        //})
    }
});