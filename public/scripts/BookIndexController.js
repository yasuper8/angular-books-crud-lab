angular.module('bookApp')
  .controller('BookIndexCtrl', BookIndexCtrl);


  BookIndexCtrl.$inject = ['$http'];

  function BookIndexCtrl( $http ) {
    console.log("book controller works");

    var vm = this;

    vm.newBook = {};


    $http({
      method: "GET",
      url: 'https://super-crud.herokuapp.com/books'
    }).then(function successCallback(response) {
      console.log('this is succ response', response.data.books);
      vm.books = response.data.books;
    }, function errorCB(response) {
      console.log("Error occur while getting book data",response);
    });


  }
