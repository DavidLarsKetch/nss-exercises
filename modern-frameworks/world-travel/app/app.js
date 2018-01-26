"use strict";

angular.module("GuidesApp", ['ngRoute'])
.config($routeProvider => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/guides.html',
    controller: 'BookCtrl'
  });
});
