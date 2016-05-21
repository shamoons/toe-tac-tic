angular.module('toeTactic').controller('LocalGameCtrl', function($scope) {
  $scope.gameMap = [{
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
  }];
  $scope.turn = "X";
  $scope.chooseSpace = function(index) {
    console.log(index)
    if (!$scope.gameMap[index].owner && $scope.turn === "X") {
      $scope.gameMap[index].owner = "X";
      $scope.turn = "O"
      $scope.checkWin();
    } else if (!$scope.gameMap[index].owner && $scope.turn === "O") {
      $scope.gameMap[index].owner = "O";
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
        if($scope.gameMap[winPath[0]].owner !== null && $scope.gameMap[winPath[0]].owner === $scope.gameMap[winPath[1]].owner && $scope.gameMap[winPath[1]].owner === $scope.gameMap[winPath[2]].owner) {
          currentWinner = $scope.gameMap[winPath[0]].owner;
          alert('winner is ' + currentWinner);
        }
      }
    });
  }

});
