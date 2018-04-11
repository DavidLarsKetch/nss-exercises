"use strict";

angular.module("GuidesApp").controller("BookCtrl", function($scope, BookFactory) {
  BookFactory.getBooks()
  .then(bookData => {
    $scope.guides = bookData.data.guides;
  });
});
