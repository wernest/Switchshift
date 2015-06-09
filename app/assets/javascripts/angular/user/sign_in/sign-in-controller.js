/**
 * Created by WILL on 5/31/2015.
 */
angular.module('public.ctrl.signIn', [
    'Devise'
])
    .controller('SignInCtrl', ['Auth', '$window', '$scope', '$mdDialog',
        function(Auth, $window,$scope, $mdDialog) {

            this.credentials = { email: '', password: '' };

            this.signIn = function() {
                // Code to use 'angular-devise' component
                Auth.login(this.credentials).then(function() {
                    $window.location.href='/shift_exchange';
                }, function() {
                    console.info('Error in authenticating user!');
                    alert('Error in signing in user!');
                });
            };

            $scope.cancel = function(){
                    $mdDialog.cancel();
            };
        }

    ]);