var shiftResourceDefaults = angular.module('shiftsapp.components.shiftResourceDefaults', ['ngResource']);

shiftResourceDefaults.factory('ShiftResourceDefaults', ['$resource',
    function($resource) {
        return function (url, params, methods) {
            var defaults = {
                update: {method: 'put'},
                create: {method: 'post'}
            };

            methods = angular.extend(defaults, methods);

            var resource = $resource(url, params, methods);

            resource.prototype.$save = function () {
                if (!this.id) {
                    return this.$create();
                }
                else {
                    return this.$update();
                }
            };

            return resource;
        };
    }]);