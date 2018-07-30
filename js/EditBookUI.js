var EditBookUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._originalBook = new Object();
  this.$container = $('#editBookModal');

  // this.preview.src = this._originalBook.coverArt;
};

EditBookUI.prototype = Object.create(Library.prototype);

EditBookUI.prototype.init = function(){
  this._bindEvents();
};

EditBookUI.prototype._bindEvents = function () {
  $(document).on('click','.edit-row', $.proxy(this._showAndPopulateModal, this));
  // $(document).on('change', '#coverFile', $.proxy(this._handleCoverUpload, this));
  $('#save-book').on('click', $.proxy(this._saveBookToLib, this));
  $(document).on('change', '#orig-cover', $.proxy(this._handleCoverEditUpload, this));
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
      newBook.coverArt = ($('#orig-cover-img')).attr('src');

    });
    var editedBook = new Book(newBook)
    this._putBook(editedBook, this._originalBook.id);
  }
  this.$container.modal('hide');
};

EditBookUI.prototype._handleCoverEditUpload = function() {
  console.log("handle cover is called with edit");
  var preview = document.querySelector('#orig-cover-img');
  var file    = document.querySelector('input[type=file]#orig-cover').files[0];
  console.log(file);
  var reader  = new FileReader();
// console.log(preview);

  reader.addEventListener("load", function () {
  preview.src  = reader.result;
    console.log(preview.src);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
};

EditBookUI.prototype._showAndPopulateModal = function(e) {
  this.$container.modal('show');
  var bookToEdit = $(e.currentTarget).attr("data-bookTitle");
  // this._originalBook = this.getBooksByTitle(bookToEdit);
  this._originalBook = this.getExactBookByTitle(bookToEdit);
  this.$container.find('#orig-cover-img').attr('src', this._originalBook.coverArt);
  this.$container.find("#edit-title").val(this._originalBook.title);
  this.$container.find("#edit-author").val(this._originalBook.author);
  this.$container.find("#edit-numPages").val(this._originalBook.numPages);
  this.$container.find("#edit-rating").val(this._originalBook.rating);
  this.$container.find("#edit-date").val(this._originalBook.pubDate);
  // this.$container.find(img[src]).val("")
};


$(function(){
  window.gEditBookUI = new EditBookUI();//sends in the jquery EditBook selector and reassinging to the instance.//
  window.gEditBookUI.init();
});
