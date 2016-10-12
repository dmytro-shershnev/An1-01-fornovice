(function() {
    'use strict';

    angular
        .module('app')
        .component('todoForm', {
            templateUrl: 'components/todo-form/todo-form.html',
            controllerAs: 'second',
            controller: 'Form'
        });
})();