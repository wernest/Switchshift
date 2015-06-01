/**
 * Created by WILL on 5/31/2015.
 */
var welcome = angular.module('shiftsapp.welcome', [
    'Devise',
    'ngMaterial',
    'public.ctrl.signIn',
    'public.ctrl.register'
]);

welcome.controller('WelcomeController', ['$scope', '$mdDialog', '$window', function($scope, $mdDialog){

    $scope.signIn = function(){
        $mdDialog.show({
            templateUrl: '/assets/angular/user/sign_in/sign-in.html',
            controller: 'SignInCtrl'
        });
    };

    $scope.register = function(){
        $mdDialog.show({
            templateUrl: '/assets/angular/user/registration/user-registration.html',
            controller: 'RegisterCtrl'
        });
    };

}]);