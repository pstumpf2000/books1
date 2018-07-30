var bookShelf = new Array();

//Format date from new datatime
// Array.prototype.uniqueObj = function() {
//   var aInstance = this.concat();
//   for (var i = 0; i < aInstance.length; i++) {
//     // aInstance[i]
//     for (var j = i+1; j < aInstance.length; j++) {
//       if (aInstance[i].title == aInstance[j].title) {
//         aInstance.splice(j--, 1);
//       }
//     }
//   }
//   return aInstance;
// }

var uniques = function(arr) {
  var aInstance = arr;
  for (var i = 0; i < aInstance.length; i++) {
    // aInstance[i]
    for (var j = i+1; j < aInstance.length; j++) {
      if (aInstance[i].title == aInstance[j].title) {
        aInstance.splice(j--, 1);
      }
    }
  }
  return aInstance;
}

// util.prototype._handleCoverUpload = function() {
//   var preview = document.querySelector('#cover-img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();
// console.log(file);
//
//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);
//
//   if (file) {
//     reader.readAsDataURL(file);
//   }
// };

// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();
//
//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);
//
//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
