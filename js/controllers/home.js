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
          owner: null,//first
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//second
          littleGame:[{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//third
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//fourth
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//fifth
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//sixth
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null, //seventh
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null, //eigth
          littleGame: [{
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
          }, {
            owner: null
          }]
        }, {
          owner: null,//ninth
          littleGame: [{
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
          }, {
            owner: null
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

});
