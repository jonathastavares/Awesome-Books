var form = document.getElementById('bookForm')
var bookArray = []
var listObj = document.getElementById('bookList')
form.addEventListener("submit", AddBook)

function AddBook(event) {
    event.preventDefault()
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    title = {book: title, author: author}
    this.title = title;
    this.author = author;
    bookArray.push(title)
    console.log(bookArray);
    ListPopulate();
};

function ListPopulate() {
    listObj.innerHTML = '';
    bookArray.forEach((bookElement) => {
        listObj.innerHTML += `<li class='text-center'>Book Name: ${bookElement.book} Book Author: ${bookElement.author}</li><button type='button' class='btn btn-secondary'>Remove</button><br>`
        
    });
};

function RemoveBook(index) {
    delete bookArray[index];
    console.log(bookArray);
};