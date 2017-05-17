(function () {
    'use strict';

    angular
        .module('toDoList')
        .factory('ToDoFactory', ToDoFactory)

    ToDoFactory.$inject = ['$http'];

    function ToDoFactory($http) {
        var service = {
            storeData: storeData
        };

        return service;

        function storeData(object) {

            return $http({
                method: 'POST',
                url: 'http://localhost:60082/api/todoes',
                data: object,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function successCallback(response) {
                    return response;
            }, function errorCallback(error) {
                    return error;
            });
        }
    }
})();