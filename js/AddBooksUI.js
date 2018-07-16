//create a constuctor, create a container//
var AddBooksUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._tempBookShelf = new Array();
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
  $('#add-to-queue-btn').on('click', $.proxy(this._qBooks, this))
};

AddBooksUI.prototype._addBooksToLib = function () {
  var booksToAdd = this._tempBookShelf
  if (booksToAdd.length) {
    // console.log("temp has length")
    if(this.addBooks(booksToAdd)) {
      // console.log(booksToAdd)
      this.$container.modal('hide');
      this._clearQueue();

    }
  } else {
    alert("Please add at least one book.");
};
};

AddBooksUI.prototype._handleModalOpen = function() {
  this.$container.modal('show');
};

AddBooksUI.prototype._clearQueue = function() {
  if(this._tempBookShelf.length) {
      this._tempBookShelf = new Array ();
    }
  return "Please add at least one book to the queue."
};

//

// AddBooksUI.prototype._makeBooks = function() {
//   var newBook = Book(
//    $("#add-title").val(), $("#add-author").val(), $("#add-pages").val(), $("#add-date").val());
//   $('add-to-queue-btn').on('click', function(e){
//     e.preventDefault();
//     $(this).serializeObject().done(function(newBook){
//       if(window.console) console.log(o);
//       var j = JSON.stringify(o);
//       alert(j);
//     });
//   });
// });
AddBooksUI.prototype._makeBooks = function() {

  var newInputs = $("form").serializeArray();
  // console.log(newInputs)
  var qBook = new Object();

  $.each(newInputs, function(index, entry) {
    if(entry.value) {
    qBook[entry.name] = entry.value;
    $("#book-details")[0].reset()
    }
    console.log(qBook)
});
return qBook;
};

// var inputs_required = all inputs from my form which have attribute required;
// function check_required_inputs() {
//    if(inputs_required != "") {
//      //create ajax with serialize() and submit form;
//    }
// } else {
//    //highlight inputs that are empty and show a message;
// }

AddBooksUI.prototype._qBooks = function() {
  // var inputsRequired = $("input[required]");
  var tempBook = this._makeBooks();
//   var allComplete = true;
//   var arr = [];
// //   // console.log(Array.isArray(inputsRequired), 'isArray')
// //
// //   // $.each(inputsRequired, function(index, input) {
//   for(var key in inputsRequired) {
//     arr.push($('inputsRequired[key]').val())
//     console.log(arr, 'arr');
//
// //   // if($('inputsRequired[key].val()') === "") {
// //   //   console.log(inputsRequired[key].val(), 'value');
// //   //   allComplete = false;
// //   // }
// };
  // if(allComplete) {
    this._tempBookShelf.push(tempBook);
    this.$container.find('.book-count').html("You have " + this._tempBookShelf.length + " book(s) in your queue.");
  // }
  // else {
  //   alert("There are one or more empty fields.");
  //   return;
  // }
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
