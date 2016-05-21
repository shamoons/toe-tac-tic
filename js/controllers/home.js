angular.module('toeTactic').controller('HomeCtrl', function($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase('https://toe-tactic.firebaseio.com/shamoon');
  var obj = $firebaseObject(ref);

  $scope.shamoon = obj;

  $scope.doInfo = function() {
    obj.foo = 'bar';
    // shamoon = 'fdsafs';
    obj.$save();
    // $scope.data = 'allowance';
  };


  $scope.messages = $firebaseArray(ref);

  $scope.addMessage = function() {



    $scope.messages.$add({
      text: $scope.newMessageText
    })
  };


});
