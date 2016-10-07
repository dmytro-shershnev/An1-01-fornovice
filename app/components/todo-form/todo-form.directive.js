(function() {
    "use strict";

    angular
        .module("app")
        .directive("todoForm", todoForm);

    // Task 06: (Subtask-01) "Create at least three directives for task list."
    function todoForm() {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "components/todo-form/todo-form.html",
            controllerAs: "second",
            controller: "Form"
        };
    }
})();