var Book = function(oArgs){
  // console.log(oArgs);
  this.coverArt = oArgs.coverArt || 'assets/book-cover-placeholder.jpeg';
  this.title = String(oArgs.title);
  this.author = String(oArgs.author);
  this.numPages = Number(oArgs.numPages);
  // this.pubDate = Date.UTC(year, month, day);
  this.pubDate = new Date(oArgs.pubDate).getUTCFullYear(); //I'm having issues with the date need to try 'get UTC full year
  this.rating = Number(oArgs.rating);
  this.version = Number(oArgs.__v);
  this.id = String(oArgs._id);
// console.log(oArgs);
};


// toLocaleDateString("en-us", {
//        month: "numeric",
//        day: "numeric",
//        year: "numeric"
