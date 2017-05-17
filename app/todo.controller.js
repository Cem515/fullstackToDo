(function () {
  'use strict';

  angular
    .module('toDoList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = ['ToDoFactory'];

  /* @ngInject */
  function ToDoController(ToDoFactory) {

    var vm = this;
    vm.toDoItem = "";
    vm.toDoList = [];
    vm.toDoObject = {};
    vm.sort = 'value';
    vm.title = 'ToDoFactory';
    vm.added = new Date();

    vm.addItem = function (toDoObject) {
      toDoObject.DateAdded = vm.added;
      ToDoFactory
        .storeData(toDoObject).then(function (response) {
          console.log(response);
          pushTodo(response.data);
        }, function (error) {
          console.log(error);
        })
    }

    function pushTodo(todo) {
      vm.toDoList.push({
        toDo: vm.toDoObject.Activity,
        priority: vm.toDoObject.Priority
      });
    }
  }
})();