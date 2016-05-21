angular.module('toeTactic').controller('HomeCtrl', function($scope, $firebaseObject, $firebaseArray) {

  var gamesRef = new Firebase('https://toe-tactic.firebaseio.com/games');


  $scope.createNewGame = function() {
    $scope.games.$add({
      players: [],
      status: "playing",
      board: [],
      turns: []
    })
  }

  $scope.games = $firebaseArray(gamesRef);

});
