var navbar = angular.module('shiftsapp.navbar', ['ui.bootstrap', 'shiftsapp.components.auth']);

navbar.controller('NavbarController', ['$scope', 'Auth', function($scope, auth) {

    var currentUserEmail = $scope.currentUserEmail;

    $scope.signOut = function() {
        auth.signOut();
    };

    //This is used to set which nav-bar item is active, but needs to be fixed
    //to use will's new directive
    $scope.isActive = function (path) {
        return path === $location.path();
    };

}]);

