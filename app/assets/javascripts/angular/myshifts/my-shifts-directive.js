var myShifts = angular.module('shiftsapp');

myShifts.directive('myShiftBrowse', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/myshifts/my-shifts-template.html',
        controller: 'MyShiftsController'
    }
});