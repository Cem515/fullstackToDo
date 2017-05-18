(function () {
  'use strict';

  angular
    .module('toDoList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = ['ToDoFactory'];

  /* @ngInject */
  function ToDoController(ToDoFactory) {
    // Empty Variables 
    var vm = this;
    vm.toDoItem = "";
    vm.toDoList = [];
    vm.toDoObject = {};
    vm.sort = 'value';
    vm.title = 'ToDoFactory';
    vm.added = new Date();
    // On Click Event - Triggers Post Request and Then Pushes data to Front
    vm.addItem = function (toDoObject) {
      toDoObject.DateAdded = vm.added;
      ToDoFactory
        .storeData(toDoObject)
        // Logs Either Success Object or Error Message
        .then(function (response) {
          console.log(response);
          pushTodo(response.data);
        }, function (error) {
          console.log(error);
        })
    }
    //Push To List
    function pushTodo(todo) {
      vm.toDoList.push({
        toDo: vm.toDoObject.Activity,
        priority: vm.toDoObject.Priority
      });
    }
  }
})();