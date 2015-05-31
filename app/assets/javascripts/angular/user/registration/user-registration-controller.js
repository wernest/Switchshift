angular.module('public.ctrl.register', ['Devise'])
    .config(function(AuthProvider) {
        // Settings
        AuthProvider.registerPath('/users.json');
        AuthProvider.registerMethod('POST');
})
    .controller('RegisterCtrl', ['Auth', '$window', '$scope', '$mdDialog',
        function(Auth, $window,$scope, $mdDialog) {

            this.credentials = {
                email: '',
                password: '',
                password_confirmation: ''
            };

            this.register = function() {
                // Code to use 'angular-devise' component
                Auth.register(this.credentials).then(function(registeredUser) {
                    $mdDialog.cancel();
                }, function(error) {
                    console.info('Error in authenticating user!');
                });
            };

            $scope.cancel = function(){
                $mdDialog.cancel();
            };
        }

    ]);