var SearchUI = function() {
  Library.call(this); //allows us to call the library in this function//
  this._tempBookShelf = new Array();
  this.$container = $('#searchModal');
};

SearchUI.prototype = Object.create(Library.prototype);

SearchUI.prototype.init = function(){
  this._bindEvents();
};

SearchUI.prototype._bindEvents = function () {
  $('#search-input').on('keypress', $.proxy(this._keyPressed, this))
  // $('#search-input').on('keypress', $.proxy(this._handleModalOpen, this))

};

SearchUI.prototype._keyPressed = function(e) {
  var searchInput = e.currentTarget.value;
  // var searchResults = this.search(searchInput)
if(e.which == 13) {
    console.log(this.search(searchInput));
    // return this.search(searchInput);
    if(this.search(searchInput).length) {
      var searchResults = this.search(searchInput)
      var ul = document.createElement("ul");
      for (var key in searchResults) {
        var li = document.createElement("li");
        $(li).text(searchResults[key]);
        ul.append(li)
        console.log(ul);
      }



      };

    };
  };

  // var searchResults = this.search(searchInput)
  // var sBook = new Object();
  // $.each(searchResults, function(index, result) {
    // if(result.value) {
    //   console.log(result.value);
  //   sBook[result.name] = result.value;
  // });
  //   console.log(sBook)
  // // });
  // return sBook;


    //   var searchResults = this.search(searchInput)
    //   var ul = document.createElement("ul");
    //   for (var key in searchResults) {
    //     var li = document.createElement("li");
    //     $(li).text(searchResults[key]);
    //     ul.append(li)
    //     console.log(ul);
    //   }
    // //   this.$container.modal('show');
    // //   this.$container.find('.modal-body').html();
    // //   console.log(this.search(searchInput.title));
    // // } else {
    // //   this.$container.find('.modal-body').text("Sorry, there are no search results.");
    // }
    // return false;
    // };
    //


// SearchUI.prototype._createUlOfSearchResults = function () {
//   var searchResults = this._keyPressed();
//   console.log(searchResults);
//   var ul = document.createElement("ul");
//   for (var i = 0; i < searchResults.length; i++) {
//     var li = document.createElement("li");
//     $(li).text(searchResults[i]);
//     ul.append(li)
//   }
//   return ul;
// };

// SearchUI.prototype._handleModalOpen = function() {
//
//   var booksToDisplay = this._keyPressed();
//   if(booksToDisplay.length){
//   this.$container.modal('show');
//   this.$container.find('.modal-body').html(booksToDisplay);
// } else {
//   this.$container.find('.modal-body').text("Sorry, there are no search results.");
// }
// return false;
// };


$(function(){
  window.gSearchUI = new SearchUI();//sends in the jquery addbooks selector and reassinging to the instance.//
  window.gSearchUI.init();
});
