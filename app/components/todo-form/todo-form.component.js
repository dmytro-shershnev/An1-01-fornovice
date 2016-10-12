(function() {
    "use strict";

    angular
        .module("app")
        .component("todoForm", {
            templateUrl: "components/todo-form/todo-form.html",
            controllerAs: "second",
            controller: function(model, todoService, sharedProperties) {
                let second = this;

                second.todo = model;
                // Task from presentation
                sharedProperties.setProperty(1);

                Object.assign(second, todoService);
            }
        });
})();