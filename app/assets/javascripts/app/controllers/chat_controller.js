function ChatController($scope, UserService, Auth){
  var cc = this;
  cc.friends = [];

  Auth.currentUser().then(function(){
    if(Auth.isAuthenticated()){
      UserService.getFriends().then(function(res){
        cc.friends = res.data;
      })
    }
  })
}

angular
  .module('app')
  .controller('ChatController', ChatController)
