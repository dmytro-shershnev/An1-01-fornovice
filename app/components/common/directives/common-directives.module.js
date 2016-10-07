(function() {
    "use strict";

    angular
        .module("commonDirectives", [])
        .directive("menu", menu)
        .directive("menuItem", menuItem)
        .directive("menuGroup", menuGroup);

    function menu() {
        return {
            restrict: "E",
            scope: {},
            transclude: true,
            template: '<ul><ng-transclude></ng-transclude></ul>'
        };
    }

    function menuItem() {
        return {
            restrict: "E",
            scope: {
                value: "@"
            },
            template: "<li>{{value}}</li>"
        };
    }

    function menuGroup() {
        return {
            restrict: "E",
            scope: {
                value: "@"
            },
            transclude: true,
            template: '<ul class="menu"><ng-transclude></ng-transclude></ul>'
        };
    }
})();