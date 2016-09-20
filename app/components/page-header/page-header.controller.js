(function() {
    "use strict";

    angular
        .module("app")
        .controller("Header", Header);

    function Header(model, todoService) {
        let $ctrl = this;

        $ctrl.todo = model;

        Object.assign($ctrl, todoService);
    }
})();