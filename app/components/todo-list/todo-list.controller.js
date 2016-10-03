(function() {
    "use strict";

    angular
        .module("app")
        .controller("Table", Table);

    function Table($filter, model, todoService, sharedProperties) {
        let $ctrl = this;

        $ctrl.todo = model;
        $ctrl.showComplete = true;

        Object.assign($ctrl, todoService);

        // Task from presentation
        $ctrl.prop2 = 2;
        $ctrl.total = sharedProperties.getProperty() + $ctrl.prop2;
        //console.log($ctrl.total); // => 3

        // Pagination
        $ctrl.optionsList = [5, 10, 15, 20];

        $ctrl.currentPage = 0;
        $ctrl.pageSize = 5;

        $ctrl.getPageData = getPageData;
        $ctrl.numberOfPages = numberOfPages;

        function getPageData() {
            return $filter("startPageFilter")($ctrl.todo.items, $ctrl.search);
        }

        function numberOfPages() {
            return Math.ceil($ctrl.getPageData().length / $ctrl.pageSize);
        }
    }
})();