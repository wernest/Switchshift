var shiftsbrowser = angular.module('shiftsapp.shiftsBrowser', ['ngResource', 'ui.bootstrap']);

shiftsbrowser.controller('ShiftsBrowserCtrl', ['$scope', '$modal', 'ShiftResource', function($scope, $modal, shiftResource) {
    $scope.shifts = shiftResource.query();

    /**
     * Handles the new Shift button click, it will
     * bring up the new Shift form
     */
    $scope.newShift = function() {
        var modalInstance = $modal.open({
            templateUrl: '/assets/angular/newshift/new-shift.html',
            controller: 'NewShiftController'
        });

        modalInstance.result.then(function (newShift) {
            $scope.shifts.push(newShift);
        });
    };
}]);