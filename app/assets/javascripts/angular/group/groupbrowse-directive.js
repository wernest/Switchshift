var groupBrowse = angular.module('shiftsapp');

groupBrowse.directive('groupBrowse', function(){
    return {
        restrict: 'E',
        templateUrl: '/assets/angular/group/groupbrowse-template.html',
        controller: 'GroupBrowseCtrl',
        scope: {
            groupId: '='
        }

    }
});