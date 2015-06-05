var shiftResource = angular.module('shiftsapp.components.profileResource', ['shiftsapp.components.shiftResourceDefaults']);

shiftResource.factory('ProfileResource', ['ShiftResourceDefaults',
    function($resource) {
        return $resource('/api/profile/:id', null,
            {
                update: {
                    method: 'PUT'
                }
            }
        );
    }
]);