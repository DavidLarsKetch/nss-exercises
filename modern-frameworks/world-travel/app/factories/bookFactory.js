"use strict";

angular.module("GuidesApp").factory("BookFactory", function($q, $http) {
  const getBooks = () => {
    return $q((resolve, reject) =>
      $http.get('../../data/guides.json')
      .then(response => resolve(response))
      .catch(err => reject(err))
    );
  };

  return {getBooks};
});
