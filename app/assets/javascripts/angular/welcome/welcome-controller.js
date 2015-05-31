/**
 * Created by WILL on 5/31/2015.
 */
var welcome = angular.module('shiftsapp.welcome', ['ngMaterial', 'Devise']);

welcome.controller('WelcomeController', ['$scope', '$mdDialog', function($scope, $mdDialog, Auth){

    $scope.signIn = function(){
        $mdDialog.show({
            templateUrl: '/assets/angular/user/sign_in/sign-in.html',
            controller: 'SignInCtrl'
        });
    };

}]);