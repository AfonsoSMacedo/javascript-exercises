const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }]
let booknames = []
for (let i = 0; i < books.length; i++) {
  booknames.push(books.at(i).title);
  ;
}
console.log(booknames)
