var Library = function(){
this.bookShelf = new Array();
};

var Book = function(author,title,numPages){
  this.author = author;
  this.title = title;
  this.numPages = numPages;
};




Library.prototype.addBook = function(book) {
  var bookExists = false;
  for(var i=0; i<this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === book.title) {
            bookExist = true;
           } else {
             bookExist = false;
       }
      }
      if(bookExists) {
        return 'Oops this book already exists';//this doesn't work -it never returns the oops message
      } else {
        this.bookShelf.push(book);
        return 'Your book was successfully added';
      }
     }

Library.prototype.removeBookByTitle = function(bookTitle) {
  var isDeleted = false;
  for(var i=0; i<this.bookShelf.length; i++){
    if(this.bookShelf[i].title === bookTitle) {
      console.log("hello")
      this.bookShelf.splice(i,1); //this is not working===================there are issues with the title class
      isDeleted = true;
    } else {
      isDeleted = false;
      console.log('Oops, this book does not exist.')
    }
  }
  if(isDeleted){
    return "Deleted!"
  } else {
    return "Not Deleted"
  }
};

//removeBookByAuthor(authorName)
// Library.prototype.removeBookByAuthor = function(authorName) {//want to use this solution: https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
//   indexof(author)
//   // if(authorName === 'string' && authorName === this.bookshelf[i].author) {
//     this.bookShelf.splice()
//   }
// }
//
//
//
// Library.prototype.getBookByTitle = function(bookTitle) {
//   if(typeof bookTitle === "string") {//definitely not working. trying to use test but might be easier to use match method
//     expr = /bookTitle/ }
//     return expr.test(this.Bookshelf);
//   }



// getBookByTitle(title)Purpose: Return all books that completely or partially matches the string
// title passed into the functionReturn: array of book objects if you find books with matching titles,
// empty array if no books are found


document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.book1 = new Book ("Stephan King", "IT", 400);//these are preloaded books
  window.book2 = new Book ("Stephan King", "Cujo", 800);
  window.book3 = new Book ("Stephan King", "Carrie", 1000);
  window.book4 = new Book ("Margaret Atwood", "The Handmaid’s Tale", 350);
  window.book5 = new Book ("Margaret Atwood", "Bodily Harm", 350);
  window.book6 = new Book ("Trevor Noah", "Born a Crime", 625);
  window.book7 = new Book ("Trevor Noah", "Bored on hit", 625);
  window.book8 = new Book ("Stephan Noah", "Sit", 625);
});
