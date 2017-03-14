(function() {
  function ModalCtrl($uibModalInstance, $scope, Room) {
    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    }
    $scope.newRoomName = "";
    var rooms = (Room.all);
    this.createRoom = function() {
      rooms.$add($scope.newRoomName);
      $uibModalInstance.dismiss('cancel');
    }
    
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();