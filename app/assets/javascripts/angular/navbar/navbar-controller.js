var navbar = angular.module('shiftsapp.navbar', ['ui.bootstrap', 'shiftsapp.components.auth']);

navbar.controller('NavbarController', ['$scope', 'Auth', '$window', '$http', function($scope, auth, $window, $http) {

    var currentUserEmail = $scope.currentUserEmail;

    $scope.signOut = function() {
        auth.signOut();
    };

    //This is used to set which nav-bar item is active, but needs to be fixed
    //to use will's new directive
    $scope.isActive = function (path) {
        return path === $location.path();
    };

    $scope.logout = function(){

        //AJAX logout function. The response is a 302, resulting in a failure being called.
        //TODO: Learn more about Devise and if we can use ajax requests to log the user out
        $http.delete('/users/sign_out')
            .then(function(){
                //Doesn't get called.
                $window.location.href="/";
            }, function(){
                //Gets called.
                $window.location.href="/";
            });
    }

}]);

