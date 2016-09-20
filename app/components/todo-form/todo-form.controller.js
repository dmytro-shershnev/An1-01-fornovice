(function() {
    "use strict";

    angular
        .module("app")
        .controller("Form", Form);

    function Form(model, todoService, sharedProperties) {
        let $ctrl = this;

        $ctrl.todo = model;
        // Task from presentation
        sharedProperties.setProperty(1);

        Object.assign($ctrl, todoService);
    }
})();