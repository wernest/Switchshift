var shiftsbrowser = angular.module('shiftsapp.shiftsBrowser', [
    'ngResource',
    'ngMaterial',
    'shiftsapp.navbar',
    'shiftsapp.components.airport',
    'shiftsapp.components.shiftResource',
    'shiftsapp.shift'

]);

shiftsbrowser.controller('ShiftsBrowserCtrl', ['$scope', 'ShiftResource', '$mdDialog', function($scope, shiftResource, $mdDialog) {
    $scope.shifts = shiftResource.query();

    /**
     * Handles the new Shift button click, it will
     * bring up the new Shift form
     */
    $scope.newShift = function() {

        $mdDialog.show({
            templateUrl: '/assets/angular/shift/shift-template.html',
            controller: 'ShiftController'
        })
            .then(function (newShift) {
                $scope.shifts.push(newShift);
        });
    };

    $scope.editShift = function(shift){

        $mdDialog.show({
            templateUrl: '/assets/angular/shift/shift-template.html',
            controller: 'ShiftController',
            locals: {
                shift: shift
            }
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