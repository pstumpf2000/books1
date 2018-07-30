//create a constuctor, create a container//
var AddBooksUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._tempBookShelf = [];
  this.numberOfBooksInQ = 0
  this.$container = $('#addBookModal');
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function(){
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('#add-books-link').on('click', $.proxy(this._handleModalOpen, this))
  // $('#add-to-queue-btn').on('click', $.proxy(this._makeBooks, this))
  // $('#add-temp-to-lib-btn').on('click', $.proxy(this._clearQueue, this))
  $('#add-temp-to-lib-btn').on('click', $.proxy(this._addBooksToLib, this))
  // $('#add-temp-to-lib-btn').on('click', $.proxy(this._qBooks, this))
  $('#add-to-queue-btn').on('click', $.proxy(this._qBooks, this))
  $(document).on('change', '#coverFile', $.proxy(this._handleCoverUpload, this));
};



AddBooksUI.prototype._addBooksToLib = function () {
  // console.log(this._tempBookShelf);
  if(this._tempBookShelf.length) {
    if(this._tempBookShelf){
    // console.log("adding books");
    // console.log(this._tempBookShelf);
    this.addBooks(this._tempBookShelf);
    this._tempBookShelf = [];
    this.numberOfBooksInQ = 0;
    this.$container.find('.book-count').html("You have " + this.numberOfBooksInQ + " book(s) in your queue.");
    this.$container.modal('hide');
  }
} else {
  alert("Please add a book to your queue first.")
  }
};
//
// AddBooksUI.prototype._addBooksToLib = function () {
//   var booksToAdd = this._tempBookShelf
//   if (booksToAdd.length) {
//     if ($("#add-title").val() !== "") {
//       // console.log("hi")
//     var formBook = this._makeBooks()
//     this.addBook(formBook, true);
//     // $("#book-details")[0].reset()1 kjn
//     }
//     // console.log("temp has length")
//     if(this.addBooks(booksToAdd)) {
//       // console.log(booksToAdd)
//       this._tempBookShelf = [];
//       this.numberOfBooksInQ = 0;
//       this.$container.find('.book-count').html("You have " + this.numberOfBooksInQ + " book(s) in your queue.");
//       this.$container.modal('hide');
//       this._clearQueue();
//       alert("Success! Books added to queue.")
//     }
//   } else if ($("#add-title").val() !== ""){
//     var formBook = this._makeBooks()
//     this.addBook(formBook);
//     this._tempBookShelf = [];
//     this.numberOfBooksInQ = 0;
//     this.$container.find('.book-count').html("You have " + this.numberOfBooksInQ + " book(s) in your queue.");
//     this.$container.modal('hide');
//   } else {
//     alert("Please add at least one book.");
//   };
// };

AddBooksUI.prototype._handleModalOpen = function() {
  this.$container.modal('show');
};

AddBooksUI.prototype._clearQueue = function() {
      this._tempBookShelf = [];
};

AddBooksUI.prototype._makeBooks = function() {
  var newInputs = $("form").serializeArray();
  // console.log(newInputs)
  var qBook = new Object();

if ($("#add-title").val() !== "") {
  $.each(newInputs, function(index, entry) {
    if(entry.value) {
    qBook[entry.name] = entry.value;
    }

});
  qBook["coverArt"]= $("#cover-img").attr("src")

$("#book-details")[0].reset()
$("#cover-img").attr("src", "assets/book-cover-placeholder.jpeg")
// console.log(qBook)
return qBook;
}
// alert("Please add a title.")
};

AddBooksUI.prototype._qBooks = function() {
  var tempBook = this._makeBooks();
  // console.log("qbooks log");
  // console.log(tempBook);
    this._tempBookShelf.push(tempBook);
    this.numberOfBooksInQ++
    this.$container.find('.book-count').html("You have " + this.numberOfBooksInQ + " book(s) in your queue.");
};

AddBooksUI.prototype._handleCoverUpload = function() {
  var preview = document.querySelector('#cover-img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
console.log(file);

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
};

  // var bookHolder = {};
   // jQuery.each( newInputs, function( i, newInput);
//    console.log(newInputs)
//    var qBook =  new Book()
//    newInputs[0].value = qBook.title;
//    newInputs[1].value = qBook.author;
//    newInputs[2].value = qBook.pages;
//    newInputs[3].value = qBook.pubDate;
//    newInputs[4].value = qBook.rating;
//
//    this._tempBookShelf.push(qBook);
//    this.$container.find('.book-count').html("You have " + this._tempBookShelf.length + " book(s) in your queue.");
//
// }



// AddBooksUI.prototype._makeBooks = function() {
//      var newBook = Book(
//       $("#add-title").val(), $("#add-author").val(), $("#add-pages").val(), $("#add-date").val());
//       console.log($("#add-title").val());
//       // for(var i=0; i < window.bookShelf.length; i++) {
//         this._tempBookShelf.push(newBook);
//         this.$container.find('.book-count').html("You have " + this._tempBookShelf.length + " book(s) in your queue.");
//         // $("#add-to-queue-btn").click(function () {
//         //   console.log("hi")
//         // $("form").trigger("reset");
//     };
        // };

// AddBooksUI.prototype._resetTempShelf = function() {
//   $( '#book-details' ).each(function(){
//       this.reset();
// };
// });
  // }
  // };
// };
// //test/====
// this._queueBooks.modal("#add-to-queue-btn")).serializeArray() );
// //   event.preventDefault();
// this._tempBookShelf.push(newBook);
// console.log(newBook)
// for(var i=0; i < window.bookShelf.length; i++) {
//   if(bookShelf.length> 1) {
// $("test").submit(function( ":input" ) {
//   console.log($( this._queueBooks.modal("#add-to-queue-btn")).serializeArray() );
//   event.preventDefault();
// ShowAuthorsUI.prototype._createUlOfAuthors = function (authors) {
//   var ul = document.createElement("ul");
//   for (var i = 0; i < authors.length; i++) {
//     var li = document.createElement("li");
//     $(li).text(authors[i]);
//     ul.append(li)
//   }
//   return ul;
// };

//    $('#add-to-queue-btn').on('click', console.log(input));
// };

// Get the value from the selected option in a dropdown
// $( "select#foo option:checked" ).val();


$(function(){
  window.gAddBooksUI = new AddBooksUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gAddBooksUI.init();
});
