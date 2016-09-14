(function() {
    "use strict";

    angular
        .module("app")
        .directive("todoList", todoList);

    function todoList() {
        return {
            templateUrl: "components/todo-list/todo-list.html"
        };
    }
})();