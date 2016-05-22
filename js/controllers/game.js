angular.module('toeTactic').controller('GameCtrl', function($scope, $stateParams, $firebaseObject) {
  var gameRef = new Firebase('https://toe-tactic.firebaseio.com/games/' + $stateParams.gameId);

  $scope.currentGame = $firebaseObject(gameRef);
  console.log($scope.currentGame);

  $scope.turn = "X";
  $scope.chooseSpace = function(index) {
    console.log(index)
    if (!$scope.currentGame.gameMap[index].owner && $scope.turn === "X") {
      $scope.currentGame.gameMap[index].owner = "X";
      $scope.turn = "O"
      $scope.checkWin();
    } else if (!$scope.currentGame.gameMap[index].owner && $scope.turn === "O") {
      $scope.currentGame.gameMap[index].owner = "O";
      $scope.turn = "X"
      $scope.checkWin();
    }
  }
  $scope.checkWin = function() {
    var winMatrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    var currentWinner = null;
    _.each(winMatrix, function(winPath) {
      if(currentWinner === null) {
        if($scope.currentGame.gameMap[winPath[0]].owner !== '' && $scope.currentGame.gameMap[winPath[0]].owner === $scope.currentGame.gameMap[winPath[1]].owner && $scope.currentGame.gameMap[winPath[1]].owner === $scope.currentGame.gameMap[winPath[2]].owner) {
          currentWinner = $scope.currentGame.gameMap[winPath[0]].owner;
          alert('winner is ' + currentWinner);
        }
      }
    });
  }

});
