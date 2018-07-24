var DataTableUI = function(container){
  Library.call(this);
  this.$container = $('#data-table');
};

DataTableUI.prototype = Object.create(Library.prototype);

DataTableUI.prototype.init = function() {
  // this.getLocal();
  // this._updateTable(window.bookShelf);
  this._addPill();
  this._bindEvents();
  this._bindCustomListeners();
  this._getData();
};

DataTableUI.prototype._bindEvents = function () {
  // $('#logo').on('click', $.proxy(this._subsetTable, this));
  $(document).on('click','.delete-row', $.proxy(this._deleteRow, this));
  // $(document).on('load', $.proxy(this._getBooksAndUpdateTable, this));
};

DataTableUI.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
  $(document).one('objUpdate', $.proxy(this._addPill, this));
  // $(document).one('subsetOfBookshelf', $.proxy(this._addPill, this));
  $(document).on('subsetOfBookshelf', $.proxy(this._subsetTable, this));
  // $(document).on('subsetOfBookshelf', $.proxy(this._updateTable, this));
};
// this._handleEventTrigger('ObjUpdate', searchResults);

DataTableUI.prototype._subsetTable = function (e) {
  // console.log("subset executed");
  this._updateTable(e.detail);
};

// DataTableUI.prototype._getBooksAndUpdateTable = function () {
//   // let dataBaseBooks =
// console.log("getbooks and update is running");
//   $.ajax({
//     url: this.libraryURL,
//     dataType: 'json',
//     method: 'GET',
//     // data: formData,
//     success: data =>{
//       console.log(data);
//       this._updateTable(data)
//     }
//   });
// };
//


DataTableUI.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  // var subsetOfBooks = books || window.bookShelf
  var _self = this;
  var $thead = this.$container.find('thead');
  $thead.empty();
  $thead.append(_self._createTableHead());
  if(e.length) {

  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  // console.log("Update table function ran");
  $.each(e, function(index, book){
    // console.log("Update table function ran after each");
    $tbody.append(_self._createRow(book));
  })}
  // else if (e.length = 0) {
  //   var $tbody = this.$container.find('tbody');
  //   $tbody.empty();
  //   $($tbody).text("Sorry, you have no books in your library.");
  // }
    return;
  };

DataTableUI.prototype._addPill = function () {
  // console.log("happened")
$("th:nth-child(3)").append('<span id="all-unique-authors" class="badge badge-pill badge-secondary">See All</span>');
};

DataTableUI.prototype._createTableHead = function () {
  var emptyBook = new Book({});
  // var headerLabels = Object.getOwnPropertyNames(emptyBook);
  var deleteHeader = document.createElement('th');
  // console.log(headerLabels);
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  thead.append(tr);

  for(var key in emptyBook) {
    var th = document.createElement('th');
    $(th).text(key);
    tr.append(th);
    if (key === 'version' || key === 'id') {
      $(th).addClass('collapse');
    }

  }
  // console.log(thead);
  $(deleteHeader).text("Delete");
  tr.append(deleteHeader);

  // console.log(tr);
  // $("th:nth-child(3)").append('<span id="all-unique-authors" class="badge badge-pill badge-secondary">See All</span>');
  return tr;
}

DataTableUI.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  var deleteBox = document.createElement('td')
  var deleteIcon = document.createElement('i');
  // var deleteInput = document.createElement('input');
  // var att = document.createAttribute("type");
  // att.value = "checkbox";
  // deleteInput.setAttributeNode(att);
// contentEditable=true
  for(var key in book){
    var td = document.createElement('td');
    $(td).text(book[key]);
    tr.append(td);
    if (key === 'version' || key === 'id') {
      $(td).addClass('collapse');
    }
  }
  tr.append(deleteBox);

  $(deleteIcon).addClass("far fa-times-circle btn delete-row");
  $(deleteIcon).attr("data-bookID", book.id);//this will allow me to use the attribute, booktitle, when I call an event on this element
  deleteBox.append(deleteIcon);
  // tr.append(document.createElement('td').append(deleteInput));
  // console.log(tr);
  return tr;
};

DataTableUI.prototype._deleteRow = function (e) {
  var bookToDelete = $(e.currentTarget).attr("data-bookID");
  this.removeBookByID(bookToDelete);
  // this._deleteBook(bookToDelete);
  console.log(bookToDelete);
  // console.log("delete test")
}

$(function(){
  window.gDataTableUI = new DataTableUI();
  window.gDataTableUI.init();
});
