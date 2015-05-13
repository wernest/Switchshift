var shiftsapp = angular.module('shiftsapp', [
    'ngRoute',
    'shiftsapp.shiftsBrowser',
    'shiftsapp.navbar',
    'shiftsapp.components.auth'
])
    .run(function($templateCache, $http) {
        //This bit of code here will pre-fetch all our templates
        $http.get('/assets/angular/shiftbrowse/shift-browse.html', {cache: $templateCache});

    });

shiftsapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/shifts', {
                templateUrl: '/assets/angular/shiftbrowse/shift-browse.html',
                controller: 'ShiftsBrowserCtrl'
            }).
            otherwise({
                redirectTo: '/shifts'
            });
    }]);
