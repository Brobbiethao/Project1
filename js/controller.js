angular.module("app")
.controller("ctrl", function($scope, $http, services, swapiservice) {
  $scope.test = "Hello World";
  //console.log("Weird anomaly");
  swapiservice.getAllPeople().then(function(res){
    $scope.characters = _.flatten(res).map(function(cur){
      if(cur.name.indexOf(" ") !== -1){
        return Object.assign({imgurl: cur.name.split(" ").join("_")}, cur )
      }
      else {
        return Object.assign({imgurl: cur.name}, cur)
      }
    })
    console.log($scope.characters)
    $scope.$digest()
  });

  })
