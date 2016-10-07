(function() {
    "use strict";

    angular
        .module("app")
        .directive("pageHeader", pageHeader);

    // Task 06: (Subtask-01) "Create at least three directives for task list."
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