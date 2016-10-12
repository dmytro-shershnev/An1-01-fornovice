(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoList', TodoList);

    function TodoList($filter, model, todoService, sharedProperties) {
        let first = this;

        first.todo = model;
        first.showComplete = true;

        Object.assign(first, todoService);

        // Task from presentation
        first.prop2 = 2;
        first.total = sharedProperties.getProperty() + first.prop2;
        //console.log($ctrl.total); // => 3

        // Pagination
        first.options = [5, 10, 15, 20];
        first.currentPage = 0;
        first.pageSize = first.options[0];

        first.getPageData = getPageData;
        first.numberOfPages = numberOfPages;

        function getPageData() {
            return $filter('startPageFilter')(first.todo.items, first.search);
        }

        function numberOfPages() {
            return Math.ceil(first.getPageData().length / first.pageSize);
        }
    }

})();