(function() {
    "use strict";

    angular
        .module("app")
        .component("pageHeader", {
            templateUrl: "components/page-header/page-header.html",
            controllerAs: "third",
            controller: function(model, todoService) {
                let third = this;

                third.todo = model;

                Object.assign(third, todoService);
            }
        });
})();