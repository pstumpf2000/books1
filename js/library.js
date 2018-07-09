var Library;

(function() {
  var instance;

  Library = function() {
    if (instance) {
      return instance;
    }
// console.log('hi');
    instance = this;
    window.bookShelf = []; //Holding array
  }
})();

Library.prototype.setLocal = function() {
console.log("Bookshelf sent to local storage");
  localStorage.setItem('books', JSON.stringify(window.bookShelf));
};

Library.prototype.getLocal = function() {
  var bookData = JSON.parse(localStorage.getItem('books'));
    for (var i=0; i<bookData.length; i++) {
      window.bookShelf[i] = new Book(bookData[i].author, bookData[i].title, bookData[i].numPages, bookData[i].publishDate);
      console.log(window.bookShelf[i]);
}
};



  Library.prototype.addBook = function(book) {
   for(var i=0; i<window.bookShelf.length; i++) {// && check author, number of pages.
     if(window.bookShelf[i].title === book.title) {//this currently doesn't allow two books with the same title.
        console.log('Oops! This book already exists.');
             return false;
     }
   }
   window.bookShelf.push(book);
   console.log('Your book was successfully added');
   this.setLocal(window.bookShelf);
   return true;
  }

   Library.prototype.addBooks = function(newBooks) {
     if (Array.isArray(newBooks)) {
       var count = 0;
       for (var i = 0; i < newBooks.length; i++) {
         if (this.addBook(newBooks[i])) {
           count++;
              this.setLocal(window.bookShelf);
         }
       }
       return count;
     }
   return "Sorry, your input must be an array."
 };


  Library.prototype.removeBookByTitle = function(bookTitle) {
    for (var i = 0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].title === bookTitle) {
        window.bookShelf.splice(i, 1);
        this.setLocal(window.bookShelf);
        return true;
      }
    }
    return false;
  };

  Library.prototype.removeBookByAuthor = function(bookAuthor) {
    var newBookShelf = new Array(); //this is our new array for all the non-removed books
    for (var i = 0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].author !== bookAuthor) {
        newBookShelf.push(window.bookShelf[i]);
      }
    }
    if (window.bookShelf.length === newBookShelf.length) {
      return false;
    }
    window.bookShelf = newBookShelf;
    this.setLocal(window.bookShelf);
    return true;
  };


  Library.prototype.getBooksByTitle = function(partialTitle) {
    var bookMatches = new Array ();
    for(var i=0; i<window.bookShelf.length; i++) {
      var currentBook = window.bookShelf[i]
      var title = currentBook.title
      if(title.indexOf(partialTitle) !== -1) {
        bookMatches.push(currentBook);
      }
    }
    return bookMatches;
  };

  Library.prototype.getBooksByAuthor = function(partialAuthor) {
  var bookMatches = new Array ();
  for(var i=0; i<window.bookShelf.length; i++) {
    var currentBook = window.bookShelf[i]
    var author= currentBook.author
    if(author.indexOf(partialAuthor)!== -1) {
      bookMatches.push(currentBook);
    }
  }
  return bookMatches;
};

Library.prototype.getAuthors = function() {
  var authNames = new Array ();
  for(var i=0; i<window.bookShelf.length; i++) {
    authNames.push(window.bookShelf[i].author);
  }
  var uniqueAuthors = new Set(authNames);
  return uniqueAuthors;
};

  Library.prototype.getRandomAuthorName = function() {
  if(window.bookShelf.length > 0) {
    return((window.bookShelf[Math.floor(Math.random()*window.bookShelf.length)].author));
  }
    return null;
};

  Library.prototype.getRandomBook = function() {
    if(window.bookShelf.length > 0) {
      return(window.bookShelf[Math.floor(Math.random()*window.bookShelf.length)])
    }
       return null;
};

// Library.prototype.search = function(input) {
//   if(input && ==="string")
// }

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

    var book1 = new Book ("Stephan King", "IT", 400, 1999);//these are preloaded books
    var book2 = new Book ("Stephan King", "Cujo", 800, 2014);
    var book3 = new Book ("Stephan King", "Carrie", 1000, 2004);
    var book4 = new Book ("Margaret Atwood", "The Handmaid’s Tale", 350, 1985);
    var book5 = new Book ("Margaret Atwood", "Bodily Harm", 350, 1999);
    // window.book6 = new Book ("Trevor Noah", "Born a Crime", 625, 1975);
    // window.book7 = new Book ("Trevor Noah", "Bees", 625, 2003);
    // window.book8 = new Book ("Stephan Noah", "Sit", 625, 2003);
    // window.book9 = new Book ("Jane Doe", "Hats", 625, 2003);
    // window.book10 = new Book ("John Doe", "Shoes", 625, 2003);

// document.addEventListener("DOMContentLoaded", function() {
//   // window.gLibrary = new Library();
//   // window.gLibraryTwo = new Library(); //instance two
//   window.book1 = new Book ("Stephan King", "IT", 400, 1999);//these are preloaded books
//   window.book2 = new Book ("Stephan King", "Cujo", 800, 2014);
//   window.book3 = new Book ("Stephan King", "Carrie", 1000, 2004);
//   window.book4 = new Book ("Margaret Atwood", "The Handmaid’s Tale", 350, 1985);
//   window.book5 = new Book ("Margaret Atwood", "Bodily Harm", 350, 1999);
//   window.book6 = new Book ("Trevor Noah", "Born a Crime", 625, 1975);
//   window.book7 = new Book ("Trevor Noah", "Bees", 625, 2003);
//   window.book8 = new Book ("Stephan Noah", "Sit", 625, 2003);
//   window.book9 = new Book ("Jane Doe", "Hats", 625, 2003);
//   window.book10 = new Book ("John Doe", "Shoes", 625, 2003);
// });
