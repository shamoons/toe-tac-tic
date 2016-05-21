angular.module('toeTactic').controller('HomeCtrl', function($scope, $firebaseObject) {
  var ref = new Firebase('https://toe-tactic.firebaseio.com/');

  $scope.stuff = $firebaseObject(ref);
  // var syncObject = $firebaseObject(ref);

  $scope.doInfo = function() {
    $scope.stuff.$save('fds');
    // $scope.data = 'allowance';
  }

  $scope.doInfo();
});
