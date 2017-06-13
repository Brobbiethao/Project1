angular.module("app")
.controller("ctrl", function($scope, $http, $state, services, swapiservice) {
  $scope.test = "Hello World";
  //console.log("Weird anomaly");
  swapiservice.getAllPeople().then(function(res){
    $scope.characters = res;
    console.log($scope.characters)
    $scope.$apply()
  });

  $scope.character = function(name) {
    console.log(name)
    $state.go("character", name)
  }

})
