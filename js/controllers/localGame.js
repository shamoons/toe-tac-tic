angular.module('toeTactic').controller('LocalGameCtrl', function($scope) {
  $scope.gridOptions = [{
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
    if (!$scope.gridOptions[index].owner && $scope.turn === "X") {
      $scope.gridOptions[index].owner = "X";
      $scope.turn = "O"
    } else if (!$scope.gridOptions[index].owner && $scope.turn === "O") {
      $scope.gridOptions[index].owner = "O";
      $scope.turn = "X"
    }
  }

});
