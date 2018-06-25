var Library = function(){
this.bookShelf = new Array();
};

Library.prototype.addBook = function() {
  this.bookShelf.push("Book");
}

  var Book = function(title, author, numPages) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
}


  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added.

// Library.prototype.removeBookByTitle = function (bookTitle) {
//   //Purpose: Remove book from from the books array by its title.
//   //Return:boolean true if the book(s) were removed, false if no books match
//
// Library.prototype.removeBookByAuthor = function (authorName) {
//   //Purpose: Remove book from from the books array by its title.
//   //Return:boolean true if the book(s) were removed, false if no books match
//
// Library.prototype.getRandomBook = function () {
//   //Purpose: Return a random book object from your books array
//   //Return: book object if you find a book, null if there are no books
//
// Library.prototype.getBookByTitle = function () {
//   //Purpose: Return all books that completely or partially matches the string title passed into the function
//   //Return: array of book objects if you find books with matching titles, empty array if no books are found
//
// Library.prototype.getBookByAuthor = function () {
//   //Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
//
document.addEventListener("DOMContentLoaded", function(authorName) {
  window.gLibrary = new Library();//instance one

});

//["IT", "The Great Gatsby", "Catcher in the Rye"]
