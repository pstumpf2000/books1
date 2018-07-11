var Book = function(oArgs){
  this.title = String(oArgs.title);
  this.author = String(oArgs.author);
  this.numPages = Number(oArgs.numPages);
  this.publishDate = new Date (oArgs.publishDate); //I'm having issues with the date need to try 'get UTC full year
  this.rating = Number(oArgs.rating);
};
