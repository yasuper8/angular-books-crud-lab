angular
  .module('bookApp')
  .controller('BookShowController', BookShowController);

BookShowController.$inject = ['$http', '$routeParams', '$location'];


function BookShowController ($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function successCallback(response) {
    console.log("this is Book Show Ctrl succ response", response.data);
    vm.aBook = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting a book data', response);
  });

  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCallback(response) {
      console.log("this is response from delete", response);
      $location.path('/');
    }, function errorCallback(response) {
      console.log('There was an error deleting a book data', response);
    });
  }

  vm.editBook = function (bookEdited) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      data: bookEdited
    }).then(function successCallback(response) {
      console.log('This is data bookEdited', bookEdited)
      console.log('this is succ res for edit', response);
      $location.path('/');
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the book data', response);
    });
  }


}
