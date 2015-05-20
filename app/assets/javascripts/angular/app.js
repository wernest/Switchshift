var shiftsapp = angular.module('shiftsapp', [
    'ngRoute',
    'shiftsapp.navbar',
    'shiftsapp.shiftsBrowser',
    'shiftsapp.newShift',
    'shiftsapp.components.auth',
    'shiftsapp.components.shiftResource',
    'shiftsapp.components.shiftResourceDefaults',
    'shiftsapp.editShift',
    'shiftsapp.editShiftService',
])
    .run(function($templateCache, $http) {
        //This bit of code here will pre-fetch all our templates
        $http.get('/assets/angular/shiftbrowse/shift-browse.html', {cache: $templateCache});

    });

shiftsapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/assets/angular/shiftbrowse/shift-browse.html',
                controller: 'ShiftsBrowserCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
