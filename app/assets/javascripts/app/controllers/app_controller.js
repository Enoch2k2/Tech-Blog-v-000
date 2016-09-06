function AppController(user){
  var vm = this;

  // false user data

  vm.user = user.falseUser();

  // flags

  vm.isLoggedIn = isLoggedIn;

  // mode functions

  function isLoggedIn(){
    return vm.user.loggedIn;
  }
}

angular
  .module('app')
  .controller('AppController', AppController)
