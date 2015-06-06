var shiftBrowse = angular.module('shiftsapp');

shiftBrowse.directive('shiftBrowse', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/shiftbrowse/shift-browse.html',
        controller: 'ShiftsBrowserCtrl'
    }
});