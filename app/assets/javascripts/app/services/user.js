function User(){

  var user;

  function User(name){
    this.name = name;
    this.friends = [];
  }

  this.createUser = function(name){
    return user = new User(name);
  }

  this.falseUser = function(){
    var user = new User("Enoch2k2");
    user.friends = [
      {name: "Johnny 5"},
      {name: "Splinter"},
      {name: "Michelangelo"},
      {name: "Leonardo"},
      {name: "Donatello"}
    ];
    user.loggedIn = true;
    return user;
  }

  this.getUser = function(){
    return user;
  }
}

angular
  .module('app')
  .service('user', User)
