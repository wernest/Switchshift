/**
 * Created by whiteside on 6/8/15.
 */
var airport = angular.module('shiftsapp.components.airport', []);

airport.factory('AirportService', ['$http', '$window',
    function($http) {

        var airportService = {};
        airportService.query = function(query) {
            return $http.get('/api/airports/query', {
                'params': {'query': query}
            }).then(function (response) {
                return response.data;
            });
        }

        return airportService;
    }
]);