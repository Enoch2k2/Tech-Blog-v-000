angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'app/templates/welcome.html'
      })

    $urlRouterProvider.otherwise('/');
  })
