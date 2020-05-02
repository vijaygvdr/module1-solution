(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.sayMessage = "";
    $scope.messageText = function () {
      var lunchText = $scope.name;
        if(lunchText != "")
        {
          var nameLength = lunchText.split(',');
          if(nameLength.length <= 3)
          {
            $scope.sayMessage = "Enjoy!";
          }
          else if(nameLength.length > 3)
          {
            $scope.sayMessage = "Too Much!";
          }
        }
        else {
          $scope.sayMessage = "Please enter data first";
        }
    }
  }
}
)();
