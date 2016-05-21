angular.module('toeTactic', ['firebase']);

angular.module('toeTactic').config(function($firebaseRefProvider) {
  $firebaseRefProvider.registerUrl('https://toe-tactic.firebaseio.com');
});
