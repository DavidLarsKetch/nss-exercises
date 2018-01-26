"use strict";

angular.module("ShroomApp").controller("ShroomCtrl", function($scope, ShroomFactory) {
  $scope.title = "Mushroom Mania";

  $scope.check;

  ShroomFactory.getShrooms()
  .then(shroomData => {
    let firebaseID = Object.keys(shroomData.data);
    let shrooms = Object.keys(shroomData.data[firebaseID]);
    $scope.shrooms = shrooms.map(shroom => shroomData.data[firebaseID][shroom]);
  });
});
