var shiftController = angular.module('shiftsapp.shift', ['ngResource', 'ngMessages']);

shiftController.controller('ShiftController', ['$scope', 'ShiftResource', 'AirportService', '$mdDialog', 'providedShift', function($scope, shiftResource, airportService, $mdDialog, providedShift) {

    //Initialize objects for New Form.
    $scope.title = "Add Shift";
    $scope.shift = {
        airports: [] // need to initialize this or the airports field doesn't work for new shifts form
    };

    if(providedShift) {
        angular.copy(providedShift, $scope.shift);
        $scope.title = "Edit Shift";
    }

    /**
     * Holds the functionality needed to drive the "chips" that show the
     * airport stopovers
     */
    $scope.airportChips = {
        'selectedItem': null,
        'searchText': null,
        'querySearch': airportService.query
    };

    /**
     * If it's a new shift, we just call save. We get the response and pass it back to the Controller to update
     * the DOM.
     */
    $scope.save = function() {
        var shiftFromServer = {};
        if(!$scope.shift.id){
            shiftFromServer = shiftResource.save(buildShiftForSavingToServer());
        }else {
            shiftFromServer = shiftResource.update(buildShiftForSavingToServer());
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

    /**
     * Converts the scope's shift into something better
     * suited for sending to the server
     */
    var buildShiftForSavingToServer = function() {
        var waypoints = [];
        if($scope.shift.airports) {
            for(var i = 0; i < $scope.shift.airports.length; i++) {
                waypoints.push({
                    airport_id: $scope.shift.airports[i].id
                });
            }
        }

        return {
            id: $scope.shift.id,
            title: $scope.shift.title,
            price: $scope.shift.price,
            shift_waypoints_attributes: waypoints
        };
    };
}]);
