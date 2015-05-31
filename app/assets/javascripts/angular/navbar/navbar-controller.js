var navbar = angular.module('shiftsapp.navbar', ['ui.bootstrap']);

navbar.controller('NavbarController', ['$scope', 'Auth', '$window', '$http', function($scope, auth, $window, $http) {

    var currentUserEmail = $scope.currentUserEmail;

    //This is used to set which nav-bar item is active, but needs to be fixed
    //to use will's new directive
    $scope.isActive = function (path) {
        return path === $location.path();
    };

    $scope.logout = function(){
        auth.logout()
            .then(function(){
                $window.location.href="/";
            });
    }

}]);

