(function() {

    angular
        .module('app')
        .factory('tasksService', tasksService);

    tasksService.$inject = ['$http', '$q'];

    function tasksService($http, $q) {
        return {
            getData
        };

        function getData() {
            return $http
                .get("data/todo.json")
                .then(onSuccess)
                .catch(onError);

            function onSuccess(response) {
                return response.data;
            }

            function onError(response) {
                return $q.reject(response.data);
            }
        }
    }

})();