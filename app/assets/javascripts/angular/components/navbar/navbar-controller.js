var navbar = angular.module('shiftsapp.navbar', [
    'ui.bootstrap',
    'shiftsapp.components.auth',
    'shiftsapp.profile',
    'shiftsapp.components.shiftResource'
]);

navbar.controller('NavbarController', ['$scope', 'Auth', '$window', '$http', '$location', '$mdDialog', function($scope, auth, $window, $http, $location, $mdDialog) {

    var currentUserEmail = $scope.currentUserEmail;
    $scope.windowLocation = $location.path();

    //This is used to set which nav-bar item is active, but needs to be fixed
    //to use will's new directive
    $scope.classIfActive = function (path, cssClass) {
        return path === $location.path() ? cssClass : '';
    };

    $scope.logout = function(){
        auth.logout()
            .then(function(){
                $window.location.href="/";
            });
    };

    $scope.launchProfile = function(){
        $mdDialog.show({
            templateUrl: '/assets/angular/user/profile/profile.html',
            controller: 'ProfileCtrl'
        });
    }

}]);

