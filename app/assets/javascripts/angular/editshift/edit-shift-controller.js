var editShiftController = angular.module('shiftsapp.editShift', ['ngResource', 'ngMessages']);

editShiftController.controller('EditShiftController', ['$scope', 'ShiftResource', '$modalInstance', 'EditShiftService', function($scope, shiftResource, $modalInstance, shiftService) {

    $scope.theShift = {};
    angular.extend($scope.theShift, shiftService.theShift);

    $scope.update = function() {
        angular.extend(shiftService.theShift, $scope.theShift);
        var shiftFromServer = shiftResource.update($scope.theShift);
        $modalInstance.close(shiftFromServer);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}])
    //Directive for giving us capitalized text
    .directive('capitalize', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            var capitalize = function(inputValue) {
                if(inputValue == undefined) inputValue = '';
                var capitalized = inputValue.toUpperCase();
                if(capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]);  // capitalize initial value
        }
    };
});