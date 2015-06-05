var shiftExchange = angular.module('shiftsapp');

shiftExchange.directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/components/navbar/nav-bar.html',
        controller: 'NavbarController',
        scope: {
            currentUserEmail: "@currentUserEmail"
        }
    }
});