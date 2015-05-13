var shiftsbrowser = angular.module('shiftsapp.shiftsBrowser', ['ngResource', 'ui.bootstrap']);

shiftsbrowser.controller('ShiftsBrowserCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.shifts = [
        {
            'id': 1,
            'name': 'Rob Shift',
            'origin': 'JFK',
            'destination': 'SAN'
        }, {
            'id': 2,
            'name': 'Tara Shift',
            'origin': 'JFK',
            'destination': 'LAS'
        }, {
            'id': 3,
            'name': 'Megan Shift',
            'origin': 'JFK',
            'destination': 'ORD'
        }, {
            'id': 4,
            'name': 'Dan Shift',
            'origin': 'JFK',
            'destination': 'SFO'
        }
    ]
}]);