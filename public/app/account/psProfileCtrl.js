angular.module('app').controller('psProfileCtrl', function($scope, psAuth, psIdentity, psNotifier){
    $scope.email = psIdentity.currentUser.username;
    $scope.fname = psIdentity.currentUser.firstName;
    $scope.lname = psIdentity.currentUser.lastName;

    $scope.update = function () {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };
        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        psAuth.updateCurrentUser(newUserData).then(function () {
            psNotifier.notify('Your user account information has been updated!');
        }, function (reason) {
            psNotifier.error(reason);
        })
    }
});