var shiftController = angular.module('shiftsapp.shift', ['ngResource', 'ngMessages', 'shiftsapp.components.shiftService']);

shiftController.controller('ShiftController', ['$scope', 'ShiftResource', '$mdDialog', 'ShiftService', function($scope, shiftResource, $mdDialog, shiftService) {

    var theResponse = shiftService.theShift;
    $scope.shift = {};

    /**
     * Angulars magical DOM manipulation works through the service. The problem, is we don't want values
     * the user is typing into here, to immediately render in the view behind this modal.
     *
     * The copy removes the $$hashkey value, which is what angular uses to track changes on
     * objects that come from ng-repeat.
     */
    angular.copy(theResponse.theShift, $scope.shift);

    $scope.newShift = theResponse.newShift;

    $scope.title = "Add Shift";
    if(!$scope.newShift){
        $scope.title = "Edit Shift";
    }

    /**
     * If it's a new shift, we just call save. We get the response and pass it back to the Controller to update
     * the DOM.
     */
    $scope.save = function() {
        var shiftFromServer = {};
        if($scope.newShift){
            shiftFromServer = shiftResource.save($scope.shift);
        }else {
            shiftFromServer = shiftResource.update($scope.shift);
        }
        $mdDialog.hide(shiftFromServer);
    };

    /**
     * Returns a delete string to the Controller, so the controller can update the DOM
     */
    $scope.delete = function () {
        shiftResource.delete($scope.shift);
        $mdDialog.hide("delete");
    };


    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);
