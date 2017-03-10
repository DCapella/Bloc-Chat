(function() {
  function RoomsCtrl(Room) {
    //code
   //var obj = Room($firebaseArray);
    //^ this is the part I don't understand how to do
    console.log(Room.all);
    //var chatRooms = Room.all;
    //this.chatRooms = Room.all;
  }
  
  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();