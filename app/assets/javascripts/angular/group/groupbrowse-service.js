/**
 * Created by WILL on 5/19/2015.
 */
var editShiftService = angular.module('shiftsapp.groupBrowser.service', ['shiftsapp.components.groupResource']);

editShiftService.factory('GroupBrowserService', ['$rootScope','GroupResource', function($rootScope, groupResource){
    var theGroup = {};

    theGroup.updateTheGroup = function (theGroup) {
        this.theGroup = groupResource.get({id: theGroup.id});
    };


    return theGroup;
}]);