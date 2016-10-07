(function() {
    "use strict";

    angular
        .module("app")
        .directive("todoList", todoList);

    function todoList() {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "components/todo-list/todo-list.html",
            controllerAs: "first",
            controller: "Table"
        };
    }
})();