var groupbrowser = angular.module('shiftsapp.groupBrowser', [
    'ngResource',
    'ngMaterial',
    'shiftsapp.navbar',
    'shiftsapp.components.shiftService',
    'shiftsapp.components.shiftResource',
    'shiftsapp.groupBrowser.service'
]);

groupbrowser.controller('GroupBrowseCtrl', ['$scope','ShiftService', '$mdDialog', 'GroupBrowserService',
    function($scope, shiftService, $mdDialog, groupBrowseService) {

        $scope.group = groupBrowseService.theGroup;

        $scope.$watch(function(){
            return groupBrowseService.theGroup;
        }, function(theGroup){
            $scope.group = theGroup;
        });


        /**
         * Handles the new Shift button click, it will
         * bring up the new Shift form
         */
        $scope.newShift = function() {
            shiftService.newShift();

            $mdDialog.show({
                templateUrl: '/assets/angular/shift/shift-template.html',
                controller: 'ShiftController'
            })
                .then(function (newShift) {
                    $scope.shifts.push(newShift);
                });
        };

        $scope.editShift = function(shift){
            shiftService.updateTheShift(shift);

            $mdDialog.show({
                templateUrl: '/assets/angular/shift/shift-template.html',
                controller: 'ShiftController'
            })
                .then(function(response){
                    if(response === "delete"){
                        $scope.shifts = shiftResource.query();
                    }else{
                        angular.extend(shift, response);
                    }
                });
        }

    }]);