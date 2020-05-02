(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.sayMessage = "";
    $scope.messageText = validateText($scope.name)
  }

function validateText(string) {
  if(string != "")
  {
    var nameLength = string.split(',');
    if(nameLength <= 3)
    {
      $scope.sayMessage = "Enjoy!";
    }
    else if(nameLength > 3)
    {
      $scope.sayMessage = "Too Much!";
    }
  }
  else {
    $scope.sayMessage = "Please enter data first";
  }
}
}

)();
