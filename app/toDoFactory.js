(function(){
    'use strict';

    angular
        .module('app')
        .factory('ToDoFactory', ToDoFactory)

    ToDoFactory.$inject = ['$http'];

    function ToDoFactory($http) {
        var service = {
            storeData: storeData
        };

        return service;

        function storeData(object) {

            $http ({
                method: 'POST', 
                url: 'http://localhost:60082/api/Todo',
                params: {
                    Activity:vm.toDoObject.toDoItem,
                    Priority: vm.toDoObject.priorities
                }
            })
         }
    }
})();