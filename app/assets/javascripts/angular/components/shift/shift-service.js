/**
 * Created by WILL on 5/19/2015.
 */
var editShiftService = angular.module('shiftsapp.components.shiftService', []);

editShiftService.factory('ShiftService', function(){

    var theShift = {
        newShift: true,
        theShift: {}
    };

    /**
     * Sets the value of the shift you want to exchange between controllers
     *
     * @param theShiftFromController
     */
    theShift.updateTheShift = function (theShiftFromController) {
        this.theShift = {
            newShift: false,
            theShift: theShiftFromController
        };
    };

    /**
     * Angular doesn't wipe this service each time, so the shift will be whatever was previously set.
     * This will wipe that object if we plan on using a new value
     *
     */
    theShift.newShift = function () {
        this.theShift = {
            newShift: true,
            theShift: {}
        };
    };



    return theShift;
});