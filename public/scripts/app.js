console.log("app.js linked!");


angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books.html',
      controllerAs: 'booksCtrl',
      controller: 'BookIndexCtrl'
    })
    .when('/books/:id', {
      templateUrl: '/templates/book-show.html',
      controllerAs: 'BookShowCtrl',
      controller: 'BookShowController'
    })


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
