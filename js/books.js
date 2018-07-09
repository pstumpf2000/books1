var Book = function(author,title,numPages, publishDate){
  this.author = String(author);
  this.title = String(title);
  this.numPages = Number(numPages);
  this.publishDate = new Date (publishDate); //I'm having issues with the date need to try 'get UTC full year
};
