const form = document.getElementById('bookForm');
const bookList = document.getElementById('bookList')

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
  static removeBook(event) {
    const removeArr = Save.dataArray()
    if (event.type == "button") {
      removeArr.splice(event.value, 1);
      localStorage.setItem('bookArray', JSON.stringify(removeArr));      
    }
  }
}

class Load {
  static listPopulate() {
    const listObj = document.getElementById('bookList');
      listObj.innerHTML = '';
      Save.dataArray().forEach((bookElement, index) => {
      listObj.innerHTML += `<li class='text-center '>Book Name: ${bookElement.title} Book Author: ${bookElement.author} <br> <button type='button' value="${index}" class='remove-btn btn btn-secondary text-center mt-2'>Remove</button></li><br>`;
    });
  }
}

document.addEventListener('DOMContentLoaded', Load.listPopulate())

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author)

  Save.saveBook(book)
  Load.listPopulate()
  form.reset()
});

bookList.addEventListener('click', (event) => {
  Save.removeBook(event.target)

  form.reset()

  Load.listPopulate()
})

