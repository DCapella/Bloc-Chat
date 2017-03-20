(function() {
  function ModalUsernameCtrl($uibModalInstance, $scope, $cookies) {
    $scope.currentUser = $cookies.get('blocChatCurrentUser');
    
    this.checkUsername = function(val) {
      if (!val || val === '') {
        alert("You didn't enter a username!");
      } else {
        $cookies.put('blocChatCurrentUser', val);
        console.log("Current User: " + $scope.currentUser);
        $uibModalInstance.dismiss('cancel');      
        
      }
    }
    
  }
  
  angular
    .module('blocChat')
    .controller('ModalUsernameCtrl', ['$uibModalInstance', '$scope', '$cookies', ModalUsernameCtrl]);
})();