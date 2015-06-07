var shiftBrowse = angular.module('shiftsapp');

shiftBrowse.directive('navList', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/navlist/navlist-template.html',
        controller: 'NavListCtrl'
    }
});