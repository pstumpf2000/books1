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
