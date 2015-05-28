var navbar = angular.module('shiftsapp.navbar', ['ui.bootstrap', 'shiftsapp.components.auth']);

navbar.controller('NavbarController', ['$scope', 'Auth', function($scope, auth) {

    $scope.signOut = function() {
        auth.signOut();
    };

    $scope.isActive = function (path) {
        return path === $location.path();
    };
}]);