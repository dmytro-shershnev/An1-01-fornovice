(function() {
    "use strict";

    angular
        .module("app")
        .directive("todoForm", todoForm);

    function todoForm() {
        return {
            templateUrl: "components/todo-form/todo-form.html"
        };
    }
})();