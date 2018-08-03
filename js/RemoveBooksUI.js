var RemoveBooksUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._tempBookShelf = new Array();
  this.$container = $('#RemoveBookModal');
};

RemoveBooksUI.prototype = Object.create(Library.prototype);

RemoveBooksUI.prototype.init = function(){
  this._bindEvents();
};

RemoveBooksUI.prototype._bindEvents = function () {
  $('#title-remove-btn').on('click', $.proxy(this._removeBooksByTitleModal, this));
  $('#author-remove-btn').on('click', $.proxy(this._removeBooksByAuthorModal, this));
};

RemoveBooksUI.prototype._removeBooksByTitleModal = function() {
  var titleToDelete = $("#remove-title").val();
  console.log($("#remove-title").val());
  // if(this.getBooksByTitle(titleToDelete) !== []) {
    // console.log(this.getBooksByTitle(titleToDelete))
    if(confirm("Do you really want to delete " + titleToDelete + "?")) {
      if(this.removeBookByTitle(titleToDelete)) {
        // this.removeBookByID(bookToDelete);
        $("#remove-by-title")[0].reset();
        return;
      }
    }
      alert("We can't find that book. Please enter an exact title.");
  // } else if (this.getBooksByTitle(titleToDelete) === []){
  // alert("We can't find that book. Please enter an exact title.");
  // }
};

RemoveBooksUI.prototype._removeBooksByAuthorModal = function() {
  var authorToDelete = $("#remove-author").val()
  if (authorToDelete) {
    if(confirm("Do you really want to delete all books by " + authorToDelete + "?")) {
      var booksToDelete = this.getBooksByExactAuthorAndDelete(authorToDelete)
    }
        $("#remove-by-author")[0].reset();
        this.$container.modal('hide');
  } else {
  alert("We can't find that book. Please enter an exact title.");
  }
};



$(function(){
  window.gRemoveBooksUI = new RemoveBooksUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gRemoveBooksUI.init();
});
