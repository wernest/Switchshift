var editShiftController = angular.module('shiftsapp.editShift', ['ngResource']);

editShiftController.controller('EditShiftController', ['$scope', 'ShiftResource', '$modalInstance', 'EditShiftService', function($scope, shiftResource, $modalInstance, shiftService) {

    $scope.theShift = shiftService.theShift;

    $scope.update = function() {
        var shiftFromServer = shiftResource.save($scope.theShift);
        $modalInstance.close(shiftFromServer);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);