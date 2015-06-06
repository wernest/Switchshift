var shiftsapp = angular.module('shiftsapp', [
    'ngRoute',
    'shiftsapp.shiftsBrowser',
    'shiftsapp.myShifts',
    'shiftsapp.navlist',
    'shiftsapp.components.auth',
    'shiftsapp.components.shiftResource',
    'Devise',
    'shiftsapp.welcome',
    'ngAnimate'
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
            when('/will', {
                templateUrl: '/assets/angular/navlist/navlist-template.html',
                controller: 'NavListCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
shiftsapp.config(function($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
        .accentPalette('green', {
            'default': '500',
            'hue-1': '200',
            'hue-2': '600',
            'hue-3': '900'
        });

    $mdIconProvider.icon('menu', '/assets/material-design-icons/navigation/svg/production/ic_menu_24px.svg', 24);
});