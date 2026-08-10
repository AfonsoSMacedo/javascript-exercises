const getTheTitles = function(books) {
let booknames = []
for (let i = 0; i < books.length; i++) {
  booknames.push(books.at(i).title);
}
return booknames
};

// Do not edit below this line
module.exports = getTheTitles;
