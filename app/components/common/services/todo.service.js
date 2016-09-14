(function() {
    "use strict";

    angular
        .module("commonServices")
        .factory("todoService", todoService);

    function todoService() {
        return {
            addNewItem,
            removeItem,
            removeCompletedItems,
            edit,
            incompleteCount,
            warningLevel
        };

        function addNewItem(items, newItem) {
            let hours = Math.floor((Math.random() * 10) + 1); // Hours 1 - 10
            let month = Math.floor((Math.random() * 12) + 1); // Month 1- 12
            let day = Math.floor((Math.random() * 31) + 1); // Day 1 - 31
            let year = 2016;
            let deadline = new Date(year, month, day).toLocaleDateString("en-US"); // Date in format "dd.mm.year"

            if (newItem && newItem.action) {
                items.push({
                    "action": newItem.action,
                    "done": false,
                    "deadline": deadline,
                    "responsible": "User " + items.length,
                    "estimate": hours,
                    "notes" : "Notes " + items.length
                });

                newItem.action = "";
            }
        }

        function edit(items, editItem) {
            this.editItem = editItem;
        }
        
        function removeItem(items, delItem) {
            let resArr = items;

            angular.forEach(resArr, (item, key) => {
                if (item.$$hashKey === delItem.$$hashKey) {
                    items.splice(key, 1);
                }
            });
        }

        function removeCompletedItems(items) {
            let resArr = [];

             angular.forEach(items, (item) => {
                if (!item.done) {
                    resArr.push(item);
                }
            });

            this.todo.items = resArr;
        }

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if (!item.done) count++;
            });

            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? "label-success" : "label-warning";
        }
    }
})();