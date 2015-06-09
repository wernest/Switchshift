var shiftsbrowser = angular.module('shiftsapp.shiftsBrowser', [
    'ngResource',
    'ngMaterial',
    'shiftsapp.navbar',
    'shiftsapp.shift',
    'shiftsapp.components.shiftService',
    'shiftsapp.components.shiftResource',
    'shiftsapp.components.shiftCardDirective'

]);

shiftsbrowser.controller('ShiftsBrowserCtrl', ['$scope', 'ShiftResource', 'ShiftService', '$mdDialog', function($scope, shiftResource, shiftService, $mdDialog) {
    $scope.shifts = shiftResource.query();

    /**
     * Handles the new Shift button click, it will
     * bring up the new Shift form
     */
    $scope.newShift = function() {
        shiftService.newShift();

        $mdDialog.show({
            templateUrl: '/assets/angular/shift/shift-template.html',
            controller: 'ShiftController'
        })
            .then(function (newShift) {
                $scope.shifts.push(newShift);
        });
    };

    $scope.editShift = function(shift){
        shiftService.updateTheShift(shift);

        $mdDialog.show({
            templateUrl: '/assets/angular/shift/shift-template.html',
            controller: 'ShiftController'
        })
            .then(function(response){
                if(response === "delete"){
                    $scope.shifts = shiftResource.query();
                }else{
                    angular.extend(shift, response);
                }
            });
    }
}]);