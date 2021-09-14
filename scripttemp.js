const form = document.getElementById('bookForm');
const listObj = document.getElementById('bookList');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Save {
  static dataArray() {
    let bookArray;
    bookArray = JSON.parse(localStorage.getItem('bookArray') || '[]');
    return bookArray
  }
  static saveBook(book) {
    const bookArray = Save.dataArray()
    bookArray.push(book)
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
    console.log(bookArray)
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author)

  Save.saveBook(book)
});

