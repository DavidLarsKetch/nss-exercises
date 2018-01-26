"use strict";

angular.module("ShroomApp").controller("ShroomCtrl", function($scope, ShroomFactory) {
  $scope.title = "Mushroom Mania";

  ShroomFactory.getShrooms()
  .then(shroomData => {
    let firebaseID = Object.keys(shroomData.data);
    let shrooms = Object.keys(shroomData.data[firebaseID]);
    $scope.allShrooms = shrooms.map(shroom => shroomData.data[firebaseID][shroom]);
    $scope.shrooms = $scope.allShrooms;
    $scope.edible = $scope.allShrooms.filter(shroom => shroom.edible === true);
    $scope.poisonous = $scope.allShrooms.filter(shroom => shroom.edible === false);
  });

  $scope.getAll = () => {
    $scope.shrooms = $scope.allShrooms;
  };

  $scope.getEdible = () => {
    $scope.shrooms = $scope.edible;
  };

  $scope.getPoisonous = () => {
    $scope.shrooms = $scope.poisonous;
  };
});
