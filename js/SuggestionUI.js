var SuggestionUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._tempBookShelf = new Array();
  this.$container = $('#suggestionBookModal');
};

SuggestionUI.prototype = Object.create(Library.prototype);

SuggestionUI.prototype.init = function(){
  this._bindEvents();
};

SuggestionUI.prototype._bindEvents = function () {
  $('#discover-by-author-btn').on('click', $.proxy(this._randomAuthor, this));
  $('#discover-by-title-btn').on('click', $.proxy(this.getRandomBook, this));
};

SuggestionUI.prototype._randomAuthor = function() {
  if(this.getRandomAuthorName()) {
    // this.$container.modal('show');
    this.$container.find('.modal-footer').html(this.getRandomAuthorName());
  } else {
    alert('Oops, there are no authors to display.');
  }
  return false;
};

SuggestionUI.prototype._randomTitle = function(titleFromDatabase) {
  if(titleFromDatabase) {
    // this.$container.modal('show');
    this.$container.find('.modal-footer').html(titleFromDatabase);
  } else {
    alert('Oops, there are no books to display.');
  }
  return false;
};

$(function(){
  window.gSuggestionUI = new SuggestionUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gSuggestionUI.init();
});
