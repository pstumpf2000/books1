var DataTableUI = function(container){
  Library.call(this);
  this.$container = $('#data-table');
};

DataTableUI.prototype = Object.create(Library.prototype);

DataTableUI.prototype.init = function() {
  this.getLocal();
  this._updateTable(window.bookShelf);
  this._addPill();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTableUI.prototype._bindEvents = function () {
  //add native events here
};

DataTableUI.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this, window.bookShelf));
  $(document).one('objUpdate', $.proxy(this._addPill, this));

  // $(document).one('subsetOfBookshelf', $.proxy(this._addPill, this));
  $('#logo').on('click', $.proxy(this._updateTable, this, window.bookShelf));
  $(document).on('click','.delete-row', $.proxy(this._deleteRow, this));
  $(document).on('subsetOfBookshelf', $.proxy(this._subsetTable, this));

};

// <thead>
//   <tr>
//     <th scope="col"></th>
//     <th scope="col">Title</th>
//     <th scope="col">Author<span id="all-unique-authors" class="badge badge-pill badge-secondary">See All</span></th>
//     <th scope="col">Pages</th>
//     <th scope="col">Publish Date</th>
//     <th scope="col">Rating</th>
//     <th scope="col">Edit</th>
//     <th scope="col">Delete?</th>
//   </tr>
// </thead>
DataTableUI.prototype._subsetTable = function (e) {
  this._updateTable(e.detail);
};


DataTableUI.prototype._updateTable = function (books) {
  // alert(e.detail.data);
  var _self = this;
  var $thead = this.$container.find('thead');
  $thead.empty();
  $thead.append(_self._createTableHead());
  if(books.length) {
    // console.log("hi")
    // this.$container.find('#data-table-head').replaceWith(this._createTableHead(window.bookShelf[0]))
  // this._createTableHead()
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  console.log("Update table function ran");
  $.each(books, function(index, book){
    console.log("Update table function ran after each");
    $tbody.append(_self._createRow(book));
  })};

    return;
  } ;
// } else {
//   this.$container.find('#data-table-head').replaceWith(this._createTableHead(emptyBook));
// }
  // this._addPill();
  // $('#data-table-head').one('load', function () {
  //   $("th:nth-child(3)").append('<span id="all-unique-authors" class="badge badge-pill badge-secondary">See All</span>');
  // })
// };

// $("#nextractorapply").one('click', function () {
//     // executes only once
//
//      $("#main").append('<section id="nextractor" class="five"> </section>');
// });
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

  }
  console.log(thead);
  $(deleteHeader).text("Delete");
  tr.append(deleteHeader);

  console.log(tr);
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
  }
  tr.append(deleteBox);

  $(deleteIcon).addClass("far fa-times-circle btn delete-row");
  $(deleteIcon).attr("data-bookTitle", book.title);//this will allow me to use the attribute, booktitle, when I call an event on this element
  deleteBox.append(deleteIcon);
  // tr.append(document.createElement('td').append(deleteInput));
  // console.log(tr);
  return tr;
};

DataTableUI.prototype._deleteRow = function (e) {
  var bookToDelete = $(e.currentTarget).attr("data-bookTitle");
  this.removeBookByTitle(bookToDelete);
  console.log("delete test")
}

$(function(){
  window.gDataTableUI = new DataTableUI();
  window.gDataTableUI.init();
});
