var newShiftController = angular.module('shiftsapp.newShift', ['ngResource']);

newShiftController.controller('NewShiftController', ['$scope', 'ShiftResource', '$mdDialog', function($scope, shiftResource, $mdDialog) {
    $scope.theShift = {};

    $scope.save = function() {
        var shiftFromServer = shiftResource.save($scope.theShift);
        $mdDialog.hide(shiftFromServer);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);