/**
 * Created by whiteside on 5/7/15.
 */
var auth = angular.module('shiftsapp.components.auth', []);

auth.factory('Auth', ['$http', '$window',
    function($http, $window) {

        var authService = {};
        authService.signOut = function() {
            $http.delete('/users/sign_out.json').
                success(function() {
                    $window.location.href = "/";
                });
        }

        return authService;
    }
]);