"use strict";

const firebaseURL = `https://fir-tut-15055.firebaseio.com/ mushrooms.json`;

angular.module("ShroomApp").factory("ShroomFactory", function($q, $http) {

  let getShrooms = () => {
    return $q((resolve, reject) => {
      $http.get(firebaseURL)
      .then(response => resolve(response))
      .catch(err => reject(err));
    });
  };

  return {getShrooms};
});
