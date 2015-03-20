angular.module('app').controller('psUserListCtrl', function ($scope, psUser) {
    $scope.users = psUser.query();
});