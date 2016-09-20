(function() {
    "use strict";

    angular
        .module("commonServices", [])
        .factory("sharedProperties", sharedProperties);

    function sharedProperties() {
        var property = 0;

        return {
            getProperty: function() {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    }
})();