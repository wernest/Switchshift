var newShiftController = angular.module('shiftsapp.newShift', ['ngResource']);

newShiftController.controller('NewShiftController', ['$scope', 'ShiftResource', '$modalInstance', function($scope, shiftResource, $modalInstance) {
    $scope.theShift = {};

    $scope.save = function() {
        var shiftFromServer = shiftResource.save($scope.theShift);
        $modalInstance.close(shiftFromServer);
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);