var ShowAuthorsUI = function(){
  this.$container = container;
  Library.call(this);
};

ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {
  this.getLocal();
  this._bindEvents();

};

ShowAuthorsUI.prototype._bindEvents = function () {
  var authors = this.getAuthors();
  if(authors.length){
    $('#allAuthorsModal').modal('show')
  }
  if(this.getAuthors().length) {

  }
  return false;
  // console.log(this.getAuthors());
};

ShowAuthorsUI.prototype._handleShowAuthors = function () {
  var ul = document.createElement("ul");
  for (var i = 0; i < authors.length; i++) {
    var li = document.createElement('li');
    $(li).text(authors[i]);
    ul.append(li);
  }
  return ul;
};

$(function(){
  window.gShowAuthUI = new ShowAuthorsUI();
  window.gShowAuthUI.init();
});
