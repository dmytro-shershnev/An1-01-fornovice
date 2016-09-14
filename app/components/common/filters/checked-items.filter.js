(function() {
    "use strict";

    // app
    angular
        .module("commonFilters")
        .filter("checkedItems", checkedItems);

    function checkedItems() {
        return function(items, showComplete) {
            let resArr = [];

            if (angular.isArray(items)) {
                angular.forEach(items, (item) => {
                    if (!item.done || showComplete) {
                        resArr.push(item);
                    }
                });

                return resArr;
            } else {
                return items;
            }
        };
    }
})();