(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    
    $stateProvider
      .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    })
      .state('rooms', {
      url: '/rooms',
      controller: 'RoomsCtrl as rooms',
      templateUrl: '/templates/rooms.html'
    })
      .state('home', {
      url: '/home',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'
    });
    
  }
  
  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
