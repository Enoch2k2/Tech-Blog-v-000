angular
  .module('app', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'app/templates/welcome.html',
        controller: 'AuthController'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/templates/sign_up.html',
        controller: 'AuthController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/templates/login.html',
        controller: 'AuthController'
      })

    $urlRouterProvider.otherwise('/');
  })
