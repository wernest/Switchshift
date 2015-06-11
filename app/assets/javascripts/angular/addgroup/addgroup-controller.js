var groupController = angular.module('shiftsapp.group', ['ngResource', 'ngMessages']);

groupController.controller('GroupController', ['$scope', 'GroupResource', 'AirportService', '$mdDialog', 'providedGroup', function($scope, groupResource, airportService, $mdDialog, providedGroup) {

    //Initialize objects for New Form.
    $scope.title = "Add Group";
    $scope.group = {};

    if(providedGroup.id) {
        angular.copy(providedGroup, $scope.group);
        $scope.title = "Edit Group";
    }

    /**
     * If it's a new shift, we just call save. We get the response and pass it back to the Controller to update
     * the DOM.
     */
    $scope.save = function() {
        var shiftFromServer = {};
        if(!$scope.group.id){
            shiftFromServer = groupResource.save($scope.group);
        }else {
            shiftFromServer = groupResource.update($scope.group);
        }
        $mdDialog.hide(shiftFromServer);
    };

    /**
     * Returns a delete string to the Controller, so the controller can update the DOM
     */
    $scope.delete = function () {
        groupResource.delete($scope.group);
        $mdDialog.hide("delete");
    };


    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);
