(function() {
    'use strict';

    angular
        .module('app')
        .component('todoList', {
            templateUrl: 'components/todo-list/todo-list.html',
            controllerAs: 'first',
            controller: 'TodoList'
        });
})();