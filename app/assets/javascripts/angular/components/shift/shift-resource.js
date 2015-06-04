var shiftResource = angular.module('shiftsapp.components.shiftResource', ['shiftsapp.components.shiftResourceDefaults']);

shiftResource.factory('ShiftResource', ['ShiftResourceDefaults',
    function($resource) {
        return $resource('/api/shifts/:id',
            {
                id: '@id'
            }, {
                mine: {
                    url: "/api/shifts/me",
                    method: 'GET',
                    isArray: 'true'
                }
            }
        );
    }
]);