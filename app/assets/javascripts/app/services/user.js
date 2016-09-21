function UserService($http, Auth){
  this.getFriends = function(){
    return $http.get('/users/'+ Auth._currentUser.id + '/friends')
  }
}

angular
  .module('app')
  .service('UserService', UserService)
