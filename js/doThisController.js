doThisTaskList.controller('DoThisController', ['$scope', function($scope) {

  $scope.taskList = [];

  $scope.addTask = function() {
    if(event.keyCode == 13 && $scope.taskName) {
      $scope.taskList.push({"name": $scope.taskName, "completed": false});
    }
  };

  $scope.deleteTask = function() {
    $scope.taskList.splice(index, 1);
  };

}]);
