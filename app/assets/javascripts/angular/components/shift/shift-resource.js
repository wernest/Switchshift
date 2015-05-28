var shiftResource = angular.module('shiftsapp.components.shiftResource', ['shiftsapp.components.shiftResourceDefaults']);

shiftResource.factory('ShiftResource', ['ShiftResourceDefaults',
    function($resource) {
        return $resource('/api/shifts/:id', { id: '@id' });
    }
]);