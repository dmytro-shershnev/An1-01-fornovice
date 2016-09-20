(function() {
    "use strict";

    angular
        .module("app")
        .controller("Table", Table);

    function Table(model, todoService, sharedProperties) {
        let $ctrl = this;

        $ctrl.todo = model;
        $ctrl.showComplete = true;

        Object.assign($ctrl, todoService);

        // Task from presentation
        $ctrl.prop2 = 2;
        $ctrl.total = sharedProperties.getProperty() + $ctrl.prop2;
        console.log($ctrl.total); // => 3
    }
})();