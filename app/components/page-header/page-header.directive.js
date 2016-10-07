(function() {
    "use strict";

    angular
        .module("app")
        .directive("pageHeader", pageHeader);

    function pageHeader() {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "components/page-header/page-header.html",
            controllerAs: "third",
            controller: "Header"
        };
    }
})();