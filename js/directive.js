angular.module('app')
.directive("directive", function() {
  return {
    templateUrl: '../views/homepage.html',
    templateUrl: '../views/pilots.html',
    templateUrl: '../views/character.html',
    restrict: 'A'
  }
});
