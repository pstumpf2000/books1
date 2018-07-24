var ShowAuthorsUI = function(container){
  this.$container = container;
  Library.call(this);
};

ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {
  // this.getLocal();
  this._bindEvents();
  return false;
};

ShowAuthorsUI.prototype._bindEvents = function () {
  $('#all-unique-authors').on('click', $.proxy(this._handleShowAuthors, this));
  return false;
};

ShowAuthorsUI.prototype._handleShowAuthors = function () {
  var authors = this.getAuthors();
  if(authors.length){
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
  } else {
    alert('Oops, there are no authors to display.');
  }
  return false;
};

ShowAuthorsUI.prototype._createUlOfAuthors = function (authors) {
  var ul = document.createElement("ul");
  for (var i = 0; i < authors.length; i++) {
    var li = document.createElement("li");
    $(li).text(authors[i]);
    ul.append(li)
  }
  return ul;
};

$(function(){
  window.gShowAuthorsUI = new ShowAuthorsUI($('#allAuthorsModal'));
  window.gShowAuthorsUI.init();
});
