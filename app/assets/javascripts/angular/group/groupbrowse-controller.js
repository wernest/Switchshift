var groupbrowser = angular.module('shiftsapp.groupBrowser', [
    'ngResource',
    'ngMaterial',
    'shiftsapp.navbar',
    'shiftsapp.editShift',
    'shiftsapp.newShift',
    'shiftsapp.editShiftService',
    'shiftsapp.components.shiftResource',
    'shiftsapp.components.shiftCardDirective'

]);

groupbrowser.controller('GroupBrowseCtrl', ['$scope', 'GroupResource', 'EditShiftService', '$mdDialog', function($scope, groupResource, editShiftService, $mdDialog) {
    $scope.group = groupResource.get({id: $scope.groupId });

    /**
     * Handles the new Shift button click, it will
     * bring up the new Shift form
     */
    $scope.newShift = function() {
        $mdDialog.show({
            templateUrl: '/assets/angular/newshift/new-shift.html',
            controller: 'NewShiftController',
            locals: {
                    type: 'new shift',
                    group: group.id
            }

        })
            .then(function (newShift) {
                $scope.shifts.push(newShift);
            });
    };

    $scope.editShift = function(shift){
        editShiftService.updateTheShift(shift);

        $mdDialog.show({
            templateUrl: '/assets/angular/editshift/editshift.html',
            controller: 'EditShiftController'
        })
            .then(function(response){
                if(response === "delete"){
                    $scope.shifts = shiftResource.query();
                }
            });
    }
}]);