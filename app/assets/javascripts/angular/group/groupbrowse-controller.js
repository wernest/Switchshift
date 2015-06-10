var groupbrowser = angular.module('shiftsapp.groupBrowser', [
    'ngResource',
    'ngMaterial',
    'shiftsapp.navbar',
    'shiftsapp.groupBrowser.service',
    'shiftsapp.shift'
]);

groupbrowser.controller('GroupBrowseCtrl', ['$scope', '$mdDialog', 'GroupBrowserService',
    function($scope, $mdDialog, groupBrowseService) {

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

            $mdDialog.show({
                templateUrl: '/assets/angular/shift/shift-template.html',
                controller: 'ShiftController',
                locals: {
                    providedShift: null
                }
            })
                .then(function (newShift) {
                    $scope.shifts.push(newShift);
                });
        };

        $scope.editShift = function(shift){

            $mdDialog.show({
                templateUrl: '/assets/angular/shift/shift-template.html',
                controller: 'ShiftController',
                locals: {
                    providedShift: shift
                }
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