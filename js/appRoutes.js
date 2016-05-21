angular.module("toeTactic").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //For any unmatched routes, redirect to /home
  $urlRouterProvider.otherwise('/');

  //Setting up states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home/home.html'
    });

  $locationProvider.html5Mode(true);
});
