(function () {
  "use strict";

  angular.module("app").controller("taskCtrl", function($scope) {

    $scope.tasks = ["one", "two", "three"];

    $scope.addTask = function(task) {
      if(task && $scope.tasks.indexOf(task) === -1) {
        $scope.task.push(task);
        $scope.newTask = "";
      } 
    }
   
    window.scope = $scope;      

  });
})(); 