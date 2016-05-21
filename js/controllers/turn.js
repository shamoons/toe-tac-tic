angular.module('toeTactic').controller('TurnCtrl', function($scope) {
  $scope.gameMap = _.map(_.range(1, 10), function(i) {
    var position = {
      position: i,
      value: _.random(0, 2)
    }

    if(position.value > 1) {
      position.value = null;
    }

    return position;
  });

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
        if($scope.gameMap[winPath[0]].value === $scope.gameMap[winPath[1]].value && $scope.gameMap[winPath[1]].value === $scope.gameMap[winPath[2]].value) {
          currentWinner = $scope.gameMap[winPath[0]].value;
          alert('winner is ' + currentWinner);
        }
      }
    });
  }
});
