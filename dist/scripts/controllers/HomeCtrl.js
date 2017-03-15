(function() {
  function HomeCtrl(Room, $uibModal, Message, $scope) {
    this.chatRooms = Room.all;
    this.currRoom = "room1";
    $scope.id = "room1";
    $scope.currMessages = Message.getByRoomId($scope.id);      
    $scope.updateId = function(value) {
      $scope.id = value;
    };
    $scope.$watch('id', function() {
      $scope.currMessages = Message.getByRoomId($scope.id);
    })
    
      
    
    this.openModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    }
  }
  
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$scope', HomeCtrl]);
})();