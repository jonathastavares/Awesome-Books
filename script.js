var form = document.getElementById('bookForm')
var bookArray = []
form.addEventListener("submit", Book)

function AddBook(event) {
    event.preventDefault()
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    title = {book: title, author: author}
    this.title = title;
    this.author = author;
    bookArray.push(title)
    console.log(bookArray);
};