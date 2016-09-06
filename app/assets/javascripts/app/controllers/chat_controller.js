function ChatController(user){
  var cc = this;
  var user = user.falseUser();

  cc.friends = user.friends;
}

angular
  .module('app')
  .controller('ChatController', ChatController)
