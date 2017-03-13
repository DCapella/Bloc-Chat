(function() {
  function ModalCtrl(ModalService) {
    var here = this;
    here.test = function() {
      alert("it worked");
    };
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();