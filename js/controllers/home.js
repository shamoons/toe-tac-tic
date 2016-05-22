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
      gameMap: [{
          owner: "empty",//first
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//second
          littleGame:[{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//third
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//fourth
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//fifth
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//sixth
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty", //seventh
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty", //eigth
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
        }, {
          owner: "empty",//ninth
          littleGame: [{
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }, {
            owner: "empty"
          }]
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
  console.log($scope.games);
});
