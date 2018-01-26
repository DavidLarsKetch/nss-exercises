"use strict";

angular.module("ShroomApp", ['ngRoute'])
.config($routeProvider => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/mushrooms.html',
  })
});
