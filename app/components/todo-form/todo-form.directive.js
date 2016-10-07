(function() {
    "use strict";

    angular
        .module("app")
        .directive("todoForm", todoForm);

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