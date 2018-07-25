var EditBookUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._originalBook = new Object();
  this.$container = $('#editBookModal');
};

EditBookUI.prototype = Object.create(Library.prototype);

EditBookUI.prototype.init = function(){
  this._bindEvents();
};

EditBookUI.prototype._bindEvents = function () {
  $(document).on('click','.edit-row', $.proxy(this._showAndPopulateModal, this));
  $('#save-book').on('click', $.proxy(this._saveBookToLib, this));
};

// AddBooksUI.prototype._makeBooks = function() {
//   var newInputs = $("form").serializeArray();
//   // console.log(newInputs)
//   var qBook = new Object();
//
// if ($("#add-title").val() !== "") {
//   $.each(newInputs, function(index, entry) {
//     if(entry.value) {
//     qBook[entry.name] = entry.value;
//     }
//     // console.log(qBook)
// });
// $("#book-details")[0].reset()
// return qBook;
// }
// // alert("Please add a title.")
// };

EditBookUI.prototype._saveBookToLib = function (e) {
  var bookEdits = $("form").serializeArray();
  var newBook = new Object();
  console.log(this._originalBook.id);

if (bookEdits) {

  $.each(bookEdits, function(index, entry) {
      if(entry.value) {
      newBook[entry.name] = entry.value;
      }
    });
    var editedBook = new Book(newBook)
    this._putBook(editedBook, this._originalBook.id);
  }
  this.$container.modal('hide');
};



EditBookUI.prototype._showAndPopulateModal = function(e) {
  this.$container.modal('show');
  var bookToEdit = $(e.currentTarget).attr("data-bookTitle");
  // this._originalBook = this.getBooksByTitle(bookToEdit);
  this._originalBook = this.getExactBookByTitle(bookToEdit);

  console.log(this._originalBook);
  // this.$container.find("p").text(bookToEdit);
  this.$container.find("#edit-title").val(this._originalBook.title);
  this.$container.find("#edit-author").val(this._originalBook.author);
  this.$container.find("#edit-numPages").val(this._originalBook.numPages);
  this.$container.find("#edit-rating").val(this._originalBook.rating);
  this.$container.find("#edit-date").val(this._originalBook.pubDate);

};


$(function(){
  window.gEditBookUI = new EditBookUI();//sends in the jquery EditBook selector and reassinging to the instance.//
  window.gEditBookUI.init();
});
