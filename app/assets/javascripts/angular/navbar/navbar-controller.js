var navbar = angular.module('shiftsapp.navbar', [
    'ui.bootstrap',
    'shiftsapp.components.auth']);

navbar.controller('NavbarController', ['$scope', 'Auth', '$window', '$http', '$location', function($scope, auth, $window, $http, $location) {

    var currentUserEmail = $scope.currentUserEmail;

    //This is used to set which nav-bar item is active, but needs to be fixed
    //to use will's new directive
    $scope.classIfActive = function (path, cssClass) {
        console.log($location.path());
        return path === $location.path() ? cssClass : '';
    };

    $scope.logout = function(){
        auth.logout()
            .then(function(){
                $window.location.href="/";
            });
    }

}]);

