var DataTableUI = function(container){
  Library.call(this);
  this.$container = $('#data-table');
};

DataTableUI.prototype = Object.create(Library.prototype);

DataTableUI.prototype.init = function() {
  this.getLocal();
  this._updateTable();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTableUI.prototype._bindEvents = function () {
  //add native events here
};

DataTableUI.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
};

DataTableUI.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();

  $.each(window.bookShelf, function(index, book){
    $tbody.append(_self._createRow(book));
  });
};

DataTableUI.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  var deleteInput = document.createElement('input');
  var att = document.createAttribute("type");
  att.value = "checkbox";
  deleteInput.setAttributeNode(att);

  for(var key in book){
    var td = document.createElement('td');
    $(td).text(book[key]);
    tr.append(td);
  }
  // tr.append(document.createElement('td').append(deleteInput));
  return tr;
};


$(function(){
  window.gDataTableUI = new DataTableUI();
  window.gDataTableUI.init();
});
