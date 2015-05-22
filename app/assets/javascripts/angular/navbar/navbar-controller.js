var navbar = angular.module('shiftsapp.navbar', ['ui.bootstrap', 'shiftsapp.components.auth']);

navbar.controller('NavbarController', ['$scope', 'Auth', function($scope, auth) {

    var currentUserEmail = $scope.currentUserEmail;

    $scope.signOut = function() {
        auth.signOut();
    };
}])
    .directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/navbar/nav-bar.html',
        controller: 'NavbarController',
        scope: {
            currentUserEmail: "@currentUserEmail"
        }
    }
});