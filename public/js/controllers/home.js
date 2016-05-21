angular.module('toeTactic').controller('HomeCtrl', function($scope, $firebaseRef) {
  $scope.doInfo = function() {
    console.log('in doInfo');
    $firebaseRef.save('hello');
  }
});
