angular.module('toeTactic').controller('HomeCtrl', function($scope, $firebaseObject) {
  var ref = new Firebase('https://toe-tactic.firebaseio.com/');

  $scope.stuff = $firebaseObject(ref);
  // var syncObject = $firebaseObject(ref);

  // syncObject.$bindTo($scope, 'data');
  $scope.doInfo = function() {
    ref.$save('fds');
    // $scope.data = 'allowance';
  }
});
