angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'js/app/views/welcome.html'
      })

    $urlRouterProvider.otherwise('/');
  })
