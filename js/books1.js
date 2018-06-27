var Library = function(){
this.bookShelf = new Array();
};

var Book = function(author,title,numPages){
  this.author = author;
  this.title = title;
  this.numPages = numPages;
};


  Library.prototype.addBook = function(book) {
   for(var i=0; i<this.bookShelf.length; i++) {// && check author, number of pages.
     if(this.bookShelf[i].title === book.title) {//this currently doesn't allow two books with the same title.
        console.log('Oops! This book already exists.');
             return false;
           }
       }
       this.bookShelf.push(book);
       console.log('Your book was successfully added');
       return true;
     }


  Library.prototype.removeBookByTitle = function(bookTitle) {
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].title === bookTitle) {
        this.bookShelf.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  Library.prototype.removeBookByAuthor = function(bookAuthor) {
    var newBookShelf = new Array(); //this is our new array for all the non-removed books
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].author !== bookAuthor) {
        newBookShelf.push(this.bookShelf[i]);
      }
    }
    if (this.bookShelf.length === newBookShelf.length) {
      return false;
    }
    this.bookShelf = newBookShelf;
    return true;
  };

  Library.prototype.getBooksByTitle = function(partialTitle) {
    var bookMatches = new Array ();
    for(var i=0; i<this.bookShelf.length; i++) {
      var currentBook = this.bookShelf[i]
      var title = currentBook.title
      if(title.includes(partialTitle)) {
        bookMatches.push(currentBook);
      }
    }
    return bookMatches;
  };


  function setup (){
    gLibrary.addBook(book1)
    gLibrary.addBook(book2)
    gLibrary.addBook(book3)
    gLibrary.addBook(book4)
    gLibrary.addBook(book5)
    gLibrary.addBook(book6)
    gLibrary.addBook(book7)
    gLibrary.addBook(book8)
    return gLibrary
  }


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
