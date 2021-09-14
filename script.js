/* eslint-disable no-use-before-define */

const form = document.getElementById('bookForm');
const bookArray = JSON.parse(localStorage.getItem('bookArray') || '[]');
const listObj = document.getElementById('bookList');

form.addEventListener('submit', (event) => {

});

function AddBook(event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  title = {
    book: title,
    author,
  };
  bookArray.push(title);
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
  ListPopulate();
}

function ListPopulate() {
  listObj.innerHTML = '';
  bookArray.forEach((bookElement, index) => {
    listObj.innerHTML += `<li class='text-center '>Book Name: ${bookElement.book} Book Author: ${bookElement.author} <br> <button type='button' value="${index}" class='remove-btn btn btn-secondary text-center mt-2'>Remove</button></li><br>`;
  });
  ButtonListener();
}

function ButtonListener() {
  const buttonArray = Array.from(document.getElementsByClassName('remove-btn'));
  buttonArray.forEach((button) => {
    button.addEventListener('click', RemoveBook);
  });
}

function RemoveBook(event) {
  const bookValue = event.target.value;
  bookArray.splice(bookValue, 1);
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
  ListPopulate();
}

ListPopulate();