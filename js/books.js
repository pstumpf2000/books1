var Book = function(oArgs){
  this.coverArt = oArgs.coverArt || "Cover Image";
  this.title = String(oArgs.title);
  this.author = String(oArgs.author);
  this.numPages = Number(oArgs.numPages);
  this.pubDate = new Date(oArgs.pubDate).getUTCFullYear(); //I'm having issues with the date need to try 'get UTC full year
  this.rating = Number(oArgs.rating);
  this.version = Number(oArgs.__v);
  this.id = String(oArgs._id);

};


// toLocaleDateString("en-us", {
//        month: "numeric",
//        day: "numeric",
//        year: "numeric"
