angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function (psAuth) {
            return psAuth.authorizeCurrentUserForRoute('admin');
        }}
    };

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'psMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'psUserListCtrl', resolve: routeRoleChecks.admin});
});


angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection ) {
        if(rejection === 'Not Authorized') {
            $location.path('/');
        }
    });
});

////
//angular.module('app').controller('mainCtrl', function ($scope) {
//    $scope.myVar = "Angular, Reporting in...";
//});