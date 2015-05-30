var shiftsbrowser = angular.module('shiftsapp.shiftsBrowser', ['ngResource', 'ui.bootstrap', 'ngMaterial']);

shiftsbrowser.controller('ShiftsBrowserCtrl', ['$scope', 'ShiftResource', 'EditShiftService', '$mdDialog', function($scope, shiftResource, editShiftService, $mdDialog) {
    $scope.shifts = shiftResource.query();

    /**
     * Handles the new Shift button click, it will
     * bring up the new Shift form
     */
    $scope.newShift = function() {
        $mdDialog.show({
            templateUrl: '/assets/angular/newshift/new-shift.html',
            controller: 'NewShiftController'
        })
            .then(function (newShift) {
                $scope.shifts.push(newShift);
        });
    };

    $scope.editShift = function(shift){

        editShiftService.updateTheShift(shift);

            $mdDialog.show({
            templateUrl: '/assets/angular/editshift/editshift.html',
            controller: 'EditShiftController'
        });

    }
}]);