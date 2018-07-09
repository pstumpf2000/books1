
var Book = function(title, author, numPages){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
};
var Library = function(){
  this.bookShelf = [];
};



Library.prototype.addBook = function(book) {
   for(var i=0; i<this.bookShelf.length; i++) {
     if(book.title === this.bookShelf[i].title) {

var book1 = new Book ({
    title: "Harry Potter",
    author: "JK Rowling",
    numPages: 234
  });

// var book2 = new Book("Spot","Jane",5);
// var book3 = new Book("booktitle","authorperson",345);


//document.addEventListener("DOMContentLoaded", function() {
 var gLibrary = new Library();//instance one
 // gLibrary.addBook(book1);
 // gLibrary.addBook(book2);
 // gLibrary.addBook(book3);
// });
