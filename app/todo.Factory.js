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
        //Post Request To Local Server - Server Must Be Active
        function storeData(object) {

            return $http({
                method: 'POST',
                url: 'http://localhost:60082/api/todoes',
                data: object,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
                // Return Either Data Response or Error Message
            }).then(function successCallback(response) {
                return response;
            }, function errorCallback(error) {
                return error;
            });
        }
    }
})();