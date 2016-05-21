angular.module("toeTactic").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //For any unmatched routes, redirect to /home
  $urlRouterProvider.otherwise('/');

  //Setting up states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home/home.html'
    })

    .state('game', {
      url: '/game',
      templateUrl: '/views/game/game.html'
    })
    .state('turns', {
      url: '/turns',
      templateUrl: '/views/tmp/turn.html'
    });

  // $locationProvider.html5Mode(true);
});
