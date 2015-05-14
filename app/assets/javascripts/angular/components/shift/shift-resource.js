var shiftResource = angular.module('shiftsapp.components.shiftResource', ['ngResource']);

shiftResource.factory('ShiftResource', ['$resource',
    function($resource) {
        return $resource('/api/shifts');
    }
]);