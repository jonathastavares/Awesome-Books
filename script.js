/* eslint-disable no-undef */
const form = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

document.addEventListener('DOMContentLoaded', Load.listPopulate());
document.addEventListener('DOMContentLoaded', Load.pages());

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);

  Save.saveBook(book);
  Load.listPopulate();
  form.reset();
});

bookList.addEventListener('click', (event) => {
  Save.removeBook(event.target);

  form.reset();

  Load.listPopulate();
});
