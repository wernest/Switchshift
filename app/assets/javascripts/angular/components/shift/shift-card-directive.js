angular.module('shiftsapp.components.shiftCardDirective', [])
    .directive('shiftCard', function() {
        return {
            restrict: 'E',
            scope: {
                shift: '=info'
            },
            templateUrl: '/assets/angular/components/shift/shift-card-template.html'
        };
    });