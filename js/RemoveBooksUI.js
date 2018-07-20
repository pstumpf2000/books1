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
  // if(this.getBooksByTitle(titleToDelete) !== []) {
    // console.log(this.getBooksByTitle(titleToDelete))
    if(confirm("Do you really want to delete " + titleToDelete + "?")) {
      if(this.removeBookByTitle(titleToDelete)) {
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
  console.log("AURHORS");
  //alert("This button works");
  var authorToDelete = $("#remove-author").val()
  // if(this.getBooksByAuthor(authorToDelete) !== []) {
    if(confirm("Do you really want to delete all books by " + authorToDelete + "?")) {
      if(this.removeBookByAuthor(authorToDelete)) {
        $("#remove-by-author")[0].reset();
        return;
      }
    }
  // }
  alert("We can't find that book. Please enter an exact title.");
};



$(function(){
  window.gRemoveBooksUI = new RemoveBooksUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gRemoveBooksUI.init();
});
