(function() {
    "use strict";

    // app
    angular
        .module("app")
        .directive("editTask", editTask);

    function editTask() {
        return {
            templateUrl: "components/common/directives/edit-task.html"
        };
    }
})();