# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Angular Book App

| **Objectives** |
| :---- |
| Use $http to access a RESTful API |
| Practice routing in Angular using `ngRoute` |

In this lab, you'll be creating a simple library app to keep track of books. The goal of this lab is to practice routing in Angular by:
* Creating route-specific view templates and controllers.
* Creating RESTful `index` and `show` routes for `books`.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page a user should be able to edit or delete a book.

Your data (a list of books) is available at `https://super-crud.herokuapp.com/books`. You and your classmates will all be working with this database, so things might get a little crazy. If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your classmates though, otherwise they might be puzzled why their newly created book resources aren't appearing in the database.

## Expectations:

Your finished product will

  1. The successfully route the user to an index page at `/`. That page will:
    * display all of the books.
    * show the image, title, author, and release date of each book.
    * include a link to the show book page on the title of each book.
  2. Successfully route the use to a show book page (`/books/:id`). The show page will:
    * display all of the data about the specific book.
    * have a delete button that deletes the specific book from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the book.  
    * The form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

## Getting Started

1. Fork this repo, and clone it into your `wdi` folder on your local machine.
2. Change directories into `angular-routing-lab`.
3. Run `budo -P --host=localhost --open` from the Terminal to start your server and open your app in the browser.
1. Include `ngRoute`:
  * Add the CDN for `ngRoute` in `index.html`.
  * Add the `ng-view` directive inside the Bootstrap `.col-md-6` in `index.html`

2. Configure your routes, build your templates, build your controllers, win.



## HTML5 Mode

Add the following code snippet in your route configuration to remove the query hash (`/#`) from the routes:

```js
// app.js

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
  $routeProvider
    ...

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);
```

Now instead of linking to `/#/books/1424`, you can link to `/books/1424`.

* For your first route, identify the html file path that refers to the desired template, the proper controller for that view, and the name that will use for the controller within the view:

  ``` js
  // app.js in the config function
  $routeProvider
    .when('/', {
      templateUrl: /* Include the path to the index template */,
      controller:  /* Which controller do you want the main page to use */,
      controllerAs:/* What will you call the controller in the html? */
    })
  ```

* Note that there's already a default route:

```js
// app.js in the config function
.otherwise({
  redirectTo: '/'
});
```

* Make sure to add a route for the individual book view.

3. Make sure you can read the API and display the proper data.
4.


## Stretch Challenges

1. **Styling:** Use Bootstrap to make fancy `index` and `show` pages, listing out all the book info, and showing an image for each of them (look up `the ngSrc` directive for displaying images). Here are some of the book fields you have to work with:

  ```js
  {
    _id: "569d962bdadd431100b37c9b",
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
    releaseDate: "January 30, 1873",
    __v: 0
  }
  ```

2. **Redirecting:** In the `BooksShowCtrl`, redirect to the homepage (`/`), if the book is not found (i.e. the route contains a book id that doesn't exist). **Hint:** Look up Angular's `$location` service.

3. **Deleting a Book:** On the `books#show` page, add a button for the user to `delete` the book. You will need:
  * An `ng-click` directive to listen for clicks on the button.
  * A function in the `BooksShowCtrl` to remove the individual book from the `allBooks` sample data.
  * A redirect to the homepage (`/`) once the book is removed.

4. **Editing a Book:** On the `books#show` page, add a button for the user to `edit` the book. You will need:
  * An `ng-click` directive to listen for clicks on the button (when the user clicks the button, an `edit` form should show).
  * An `ng-submit` event on the `edit` form.
  * A function in the `BooksShowCtrl` to update the individual book in the `allBooks` sample data.
