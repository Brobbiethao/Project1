angular.module('app')
.controller('charCtrl', function($scope, swapiservice, $stateParams) {
  // $scope.char = swapiservice.getCharByName($stateParams.name);
  $scope.char = swapiservice.getCharByName($stateParams.name);
  console.log($scope.char);

})
