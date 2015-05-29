var editShiftController = angular.module('shiftsapp.editShift', ['ngResource', 'ngMessages']);

editShiftController.controller('EditShiftController', ['$scope', 'ShiftResource', '$mdDialog', 'EditShiftService', function($scope, shiftResource, $mdDialog, shiftService) {

    $scope.theShift = {};
    angular.extend($scope.theShift, shiftService.theShift);

    $scope.update = function() {
        angular.extend(shiftService.theShift, $scope.theShift);
        var shiftFromServer = shiftResource.update($scope.theShift);
        $mdDialog.hide(shiftFromServer);
    };

    $scope.cancel = function () {
        $mdDialog.hide();
    };
}]);
