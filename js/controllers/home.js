angular.module('toeTactic').controller('HomeCtrl', function($scope, $state, $firebaseArray) {

  var gamesRef = new Firebase('https://toe-tactic.firebaseio.com/games');


  $scope.createNewGame = function() {

    $scope.games.$add({
      players: [
        playerX = {
          id: "x"
        },
        playerO = {
          id: "o"
        },
        viewer = {
          id: [""]
        }
      ],
      status: "playing",
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      turns: []
    })
    .then(function(data) {
      $state.go('game.detail', {
        gameId: data.key(),
        currentPlayer: 'x'
      });
    });

  }

  $scope.games = $firebaseArray(gamesRef);

});
