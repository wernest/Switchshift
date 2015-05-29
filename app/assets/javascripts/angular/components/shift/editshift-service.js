/**
 * Created by WILL on 5/19/2015.
 */
var editShiftService = angular.module('shiftsapp.editShiftService', []);

editShiftService.factory('EditShiftService', function($rootScope){
    var theShift = {};
    theShift.title = "";
    theShift.origin = "";
    theShift.destination = "";

    theShift.updateTheShift = function (theShift) {
        this.theShift = theShift;
    };

    return theShift;
});