var newShiftController = angular.module('shiftsapp.newShift', ['ngResource', 'ngMessages']);

newShiftController.controller('NewShiftController', ['$scope', 'ShiftResource', '$mdDialog', '$log', function($scope, shiftResource, $mdDialog, $log) {
    $scope.newShift = {};

    $scope.save = function() {
        var shiftFromServer = shiftResource.save($scope.newShift);
        $mdDialog.hide(shiftFromServer);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);