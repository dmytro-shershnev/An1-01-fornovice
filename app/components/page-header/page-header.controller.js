(function() {
    'use strict';

    angular
        .module('app')
        .controller('Header', Header);

    function Header(model, todoService) {
        let third = this;

        third.todo = model;

        Object.assign(third, todoService);
    }

})();
