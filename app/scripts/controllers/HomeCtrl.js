(function() {
  function HomeCtrl(Room, $uibModal, Message, $scope, $cookies) {
    this.chatRooms = Room.all;
    this.currRoom = "room1";
    $scope.currentUser = $cookies.get('blocChatCurrentUser');    
    $scope.id = "room1";
    $scope.currMessages = Message.getByRoomId($scope.id);      
    $scope.updateId = function(value) {
      $scope.id = value;
    };
    $scope.$watch('id', function() {
      $scope.currMessages = Message.getByRoomId($scope.id);
    })
    
    this.sendMessage = function(val) {
/*
      alert(val);
*/
      Message.send(val, $scope.id, $scope.currentUser);
    }
    
      
    
    this.openModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    }
    
    this.changeUsername = function() {
      $uibModal.open({
        // Modal configuration object properties
        keyboard: false,
        templateUrl: '/templates/modalUsername.html',
        controller: 'ModalUsernameCtrl as modalUsername'        
      }); 
    }
    
    
  }
  
  
  
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$scope', '$cookies', HomeCtrl]);
})();