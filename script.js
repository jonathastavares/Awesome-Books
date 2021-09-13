var form = document.getElementById('bookForm')
var bookArray = JSON.parse(localStorage.getItem("bookArray") || "[]");
var listObj = document.getElementById('bookList')
form.addEventListener("submit", AddBook)

function AddBook(event) {
    event.preventDefault()
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    title = {
        book: title,
        author: author
    }
    title = title;
    author = author;
    bookArray.push(title)
    localStorage.setItem("bookArray", JSON.stringify(bookArray))
    ListPopulate();
};

function ListPopulate() {
    listObj.innerHTML = '';
    bookArray.forEach((bookElement, index) => {
        listObj.innerHTML += `<li class='text-center '>Book Name: ${bookElement.book} Book Author: ${bookElement.author} <br> <button type='button' value="${index}" class='remove-btn btn btn-secondary text-center mt-2'>Remove</button></li><br>`
    });
    ButtonListener()
};

function ButtonListener() {
    var buttonArray = Array.from(document.getElementsByClassName("remove-btn"))
    buttonArray.forEach((button) => {
        button.addEventListener("click", RemoveBook)
    })
};

function RemoveBook(event) {
    var bookValue = event.target.value
    bookArray.splice(bookValue, 1)
    localStorage.setItem("bookArray", JSON.stringify(bookArray))
    ListPopulate()
}

ListPopulate()