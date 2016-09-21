angular
  .module('app', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'UserController',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().catch(function() {
            $state.go('home.login');
          });
        }]
      })
      .state('home.signup', {
        url: 'signup',
        templateUrl: 'app/templates/sign_up.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          })
        }]
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'app/templates/login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          })
        }]
      });


    $urlRouterProvider.otherwise('/');
  })
