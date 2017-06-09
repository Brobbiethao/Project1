angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html'
    })
    .state('pilots', {
      url: '/pilots',
      templateUrl: '../views/pilots.html'
    })
    .state('ships', {
      url: '/planes',
      templateUrl: '../views/planes.html'
    })

    $urlRouterProvider
    .otherwise('/')

})
