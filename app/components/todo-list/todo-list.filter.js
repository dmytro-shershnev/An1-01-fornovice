(function() {
    "use strict";

    // app
    angular
        .module("app")
        .filter("taskFilter", taskFilter)
        .filter("startPageFilter", startPageFilter);

    function taskFilter() {
        return function(items, search) {
            let resArr = [];

            if (angular.isArray(items) && search) {
                angular.forEach(items, (item) => {
                    if (item.action.indexOf(search) >= 0 || item.responsible.indexOf(search) >= 0) {
                        resArr.push(item);
                    }
                });

                return resArr;
            } else {
                return items;
            }
        };
    }

    function startPageFilter() {
        return function(items, start) {
            start = parseInt(start, 10);

            return items.slice(start);
        }
    }
})();