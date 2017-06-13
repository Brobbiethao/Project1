angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
  .otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/homepage.html'
    })
    .state('pilots', {
      url: '/pilots',
      templateUrl: '../views/pilots.html'
    })
    .state('character', {
      url: '/character/:name',
      templateUrl: '../views/character.html',
      controller: 'charCtrl'
      // controller: function($scope, $stateParams) {
      //   console.log($stateParams)
      // }
    })
})
