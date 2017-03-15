(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
/*
    console.log($firebaseArray(ref.orderByChild("roomId").equalTo("room1")));
*/
    
    return {
      getByRoomId: function (roomId) {
        // Filter the mesages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }
    };
  }
  
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();