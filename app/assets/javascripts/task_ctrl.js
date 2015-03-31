(function () {
  "use strict";

  angular.module("app").controller("taskCtrl", function($scope) {

    $scope.tasks = [];

    $scope.addTask = function(task) {
      if(task && $scope.tasks.indexOf(task) === -1) {
        $scope.tasks.push({task: task, completed: false});
        $scope.newTask = undefined;
      } 
    }
   
    $scope.toggleComplete = function(task){
      task.completed = !task.completed;
    }

    $scope.deleteTask = function(task){
      if(task && $scope.task.indexOf(task));
      $scope.tasks.pop(task);

    }

    window.scope = $scope;      

  });
})(); 