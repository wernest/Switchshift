var profileController = angular.module('shiftsapp.profile', [
    'ngResource',
    'shiftsapp.components.profileResource',
    'ngMessages']);

profileController.controller('ProfileCtrl', ['$scope', 'ProfileResource', '$mdDialog', function($scope, profileResource, $mdDialog) {

    $scope.theUser = profileResource.get();

    $scope.save = function() {
        var theUsersProfile = profileResource.update({ id: $scope.theUser.id}, $scope.theUser);
        $mdDialog.hide(theUsersProfile);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);