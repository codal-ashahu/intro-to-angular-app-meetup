(function() {
  "use strict"; 

  angular.module("app").controller("miscCtrl", function($scope) {

    $scope.message = "Hello World!";

    $scope.tasks = ["Take out the trash", "Mow the lawn", "Feed the dog"];

  });
})();