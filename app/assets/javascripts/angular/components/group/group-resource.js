var groupResource = angular.module('shiftsapp.components.groupResource', ['shiftsapp.components.shiftResourceDefaults']);

groupResource.factory('GroupResource', ['ShiftResourceDefaults',
    function($resource) {
        return $resource('/api/groups/:id',
            {
                id: '@id'
            }, {
                mine: {
                    url: '/api/groups/mine',
                    method: 'GET',
                    isArray: 'true'
                }
            }
        );
    }
]);