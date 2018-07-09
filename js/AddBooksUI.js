//create a constuctor, create a container//
var AddBooksUI = function(container) {
  Linrary.call(this); //allows us to call the library in this function//
  this._tempBookShelf = new Array();
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function(){
  this._bindEvents();
}

AddBooksUI.prototype._bindEvents = function () {
  $('#add-books-link').on('click', $.proxy(this._handleModalOpen, this))
};

AddBooksUI.prototype._queueBooks = function () {
};

AddBooksUI.prototype._addBooksToLib = function () {
};

AddBooksUI.prototype._handleModalOpen = function() {
  this.container.modal('show');

}

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#addBooksModal'));//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gAddBooksUI.init();
});
