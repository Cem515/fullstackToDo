(function() {
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
    vm.toDoObject = [];
    vm.sort = 'value';
    vm.reverse = false;

    vm.addItem = function(toDoObject) {

      ToDoFactory
        .storedata(toDoObject)

      vm.toDoList.push({
        toDo: vm.toDoObject.toDoItem,
        priority: vm.toDoObject.priorities
      });
    }

    vm.prior = function(priorities) {
      {
        var priorities = vm.toDoObject.priorities
        console.log(priorities);
        var swapped;
        do {
          swapped=false;
          for(var i=0; i<priorities.length-1; i++) {
            if (a[i] > a[i+1]) {
              var temp = a[i];
              a[i] = a[i+1];
              a[i+1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      }
vm.prior(priorities);
console.log(priorities);
    }
  }
})();
