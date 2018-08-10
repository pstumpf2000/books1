var SearchUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._searchResultsBookShelf = new Array();
  // this.$container = $('#searchModal');
  this.$container = $('#data-table');

};

SearchUI.prototype = Object.create(Library.prototype);
SearchUI.prototype.init = function(){
  this._bindEvents();
};

SearchUI.prototype._bindEvents = function () {
  // $('#search-input').on('keypress', $.proxy(this._keyPressed, this))
  $('#search-input').on('submit', $.proxy(this._searchTable, this));
  $('#logo').on('click', $.proxy(this._clearSearch, this));
  $('#all-books').on('click', $.proxy(this._clearSearch, this));

  // $('#search-input').on('keypress', $.proxy(this._handleModalOpen, this))
  // $(document).on('objUpdate', $.proxy(this._updateTable, this));

};

// SearchUI.prototype._searchTable = function(e) {
//   console.log("search fired");
//   var searchInput = $("#search-box").val()
//   e.preventDefault(e);
//   if(searchInput.length) {
//     searchResults = this.search(searchInput);
//     $("#search-input")[0].reset()
//   }
// };


SearchUI.prototype._searchTable = function (e) {
  searchInput = $("#search-box").val()
  e.preventDefault(e);
  this._getSearchResults(searchInput).then((res)=>{//es6 this is a promise
    if(res){
      for(item in res){
        this._searchResultsBookShelf.push(new Book(res[item]));
      }
      this._handleEventTrigger('subsetOfBookshelf', this._searchResultsBookShelf);
      this._searchResultsBookShelf = []
    }
  });
};

SearchUI.prototype._clearSearch = function() {
  this._handleEventTrigger('subsetOfBookshelf', window.bookShelf);
   $("#search-input")[0].reset()

}



$(function(){
  window.gSearchUI = new SearchUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gSearchUI.init();
});
