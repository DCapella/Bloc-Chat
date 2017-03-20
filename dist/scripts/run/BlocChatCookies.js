(function() {
  function BlocChatCookies($cookies, $uibModal) {
    //$cookies.remove('blocChatCurrentUser');
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        keyboard: false,
        templateUrl: '/templates/modalUsername.html',
        controller: 'ModalUsernameCtrl as modalUsername'        
      });
      // Do something to allow users to set their username
    } //else {
      //alert("Your username is " + currentUser);
    //}
  }
  
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();