(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    rooms.$add().then(function(ref) {
      var id = ref.key;
      console.log("added record with id " + id);
      rooms.$indexFor(id);
    });
    return {
      all: rooms
    };
  }
  
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();