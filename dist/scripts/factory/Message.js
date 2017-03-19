(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    var now = function() {
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      
      var time = h + "" + m;
      
      return time;
    }
    
    return {
      getByRoomId: function (roomId) {
        // Filter the mesages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage, roomId, username) {
        // Send method logic
        var time = now();
        messages.$add({ content: newMessage, roomId: roomId, sentAt: time, username: username });
      }
    };
  }
  
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();