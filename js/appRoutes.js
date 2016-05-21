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
      abstract: true,
      url: '/game',
      template: '<div ui-view></div>'
    })
    .state('game.detail', {
      url: '/:gameId?currentPlayer',
      templateUrl: '/views/game/game.html'
    })
    .state('localGame', {
      url: '/localgame',
      templateUrl: '/views/game/localGame.html',
      controller: 'LocalGameCtrl'
    })
    .state('turns', {
      url: '/turns',
      templateUrl: '/views/tmp/turn.html'
    });

  // $locationProvider.html5Mode(true);
});
