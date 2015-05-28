var editShiftController = angular.module('shiftsapp.editShift', ['ngResource']);

editShiftController.controller('EditShiftController', ['$scope', 'ShiftResource', '$modalInstance', 'EditShiftService', function($scope, shiftResource, $modalInstance, shiftService) {

    $scope.theShift = {};
    angular.extend($scope.theShift, shiftService.theShift);

    $scope.update = function() {
        angular.extend(shiftService.theShift, $scope.theShift);
        var shiftFromServer = shiftResource.update($scope.theShift);
        $modalInstance.close(shiftFromServer);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);