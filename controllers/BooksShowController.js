angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksShowController.$inject=['$http', '$routeParams'];
function BooksShowController($http, $routeParams) {
  var vm = this;
};
