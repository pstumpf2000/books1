var Library;

(function() {
  var instance;

  Library = function() {
    if (instance) {
      return instance;
    }
// console.log('hi');
    instance = this;
    this.bookShelf = []; //Holding array
  }
})();

Library.prototype.setLocal = function() {
console.log("Bookshelf sent to local storage");
  localStorage.setItem('books', JSON.stringify(this.bookShelf));
};

Library.prototype.getLocal = function() {
  var bookData = JSON.parse(localStorage.getItem('books'));
    for (var i=0; i<bookData.length; i++) {
      this.bookShelf[i] = new Book(bookData[i].author, bookData[i].title, bookData[i].numPages, bookData[i].publishDate);
      console.log(this.bookShelf[i]);
}
};

var Book = function(author,title,numPages, publishDate){
  this.author = String(author);
  this.title = String(title);
  this.numPages = Number(numPages);
  this.publishDate = new Date (publishDate); //I'm having issues with the date need to try 'get UTC full year
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

   Library.prototype.addBooks = function(newBooks) {
     if (Array.isArray(newBooks)) {
       var count = 0;
       for (var i = 0; i < newBooks.length; i++) {
         if (this.addBook(newBooks[i])) {
           count++;
         }
       }
       return count;
     }
   return "Sorry, your input must be an array."
 };


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
      if(~title.indexOf(partialTitle)) {
        bookMatches.push(currentBook);
      }
    }
    return bookMatches;
  };

  Library.prototype.getBooksByAuthor = function(partialAuthor) {
    var bookMatches = new Array ();
    for(var i=0; i<this.bookShelf.length; i++) {
      var currentBook = this.bookShelf[i]
      var author= currentBook.author
      if(~author.indexOf(partialAuthor)) {
        bookMatches.push(currentBook);
      }
    }
    return bookMatches;
  };

Library.prototype.getAuthors = function() {
  var authNames = new Array ();
  var uniqueAuthors = new Set(authNames);
  for(var i=0; i<this.bookShelf.length; i++) {
    authNames.push(this.bookShelf[i].author);
    }
    return uniqueAuthors;
};

  Library.prototype.getRandomAuthorName = function() {
  if(this.bookShelf.length > 0) {
    return((this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)].author));
  }
     return null;
};


  Library.prototype.getRandomBook = function() {
    if(this.bookShelf.length > 0) {
      return(this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)])
    }
       return null;
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
  window.gLibraryTwo = new Library(); //istance two
  window.book1 = new Book ("Stephan King", "IT", 400, 1999);//these are preloaded books
  window.book2 = new Book ("Stephan King", "Cujo", 800, 2014);
  window.book3 = new Book ("Stephan King", "Carrie", 1000, 2004);
  window.book4 = new Book ("Margaret Atwood", "The Handmaid’s Tale", 350, 1985);
  window.book5 = new Book ("Margaret Atwood", "Bodily Harm", 350, 1999);
  window.book6 = new Book ("Trevor Noah", "Born a Crime", 625, 1975);
  window.book7 = new Book ("Trevor Noah", "Bees", 625, 2003);
  window.book8 = new Book ("Stephan Noah", "Sit", 625, 2003);
});
