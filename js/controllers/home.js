angular.module('toeTactic').controller('HomeCtrl', function($scope, $state, $firebaseArray) {

  var gamesRef = new Firebase('https://toe-tactic.firebaseio.com/games');

  $scope.createNewGame = function() {

    $scope.games.$add({
      players: [
        {
          id: "x"
        },
        {
          id: "o"
        },
        {
          id: [""]
        }
      ],
      status: "playing",
      gameMap: [{
        owner: ''
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }, {
        owner: null
      }],
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
