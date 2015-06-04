var shiftsapp = angular.module('shiftsapp', [
    'ngRoute',
    'shiftsapp.shiftsBrowser',
    'shiftsapp.myShifts',
    'shiftsapp.components.auth',
    'shiftsapp.components.shiftResource',
    'Devise',
    'shiftsapp.welcome'
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
            when('/me', {
                templateUrl: '/assets/angular/myshifts/my-shifts-template.html',
                controller: 'MyShiftsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
shiftsapp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .accentPalette('green', {
            'default': '500',
            'hue-1': '200',
            'hue-2': '600',
            'hue-3': '900'
        });
});