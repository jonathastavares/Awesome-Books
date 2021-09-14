/* eslint-disable no-unused-vars */
class Save {
  static dataArray() {
    const bookArray = JSON.parse(localStorage.getItem('bookArray') || '[]');
    return bookArray;
  }

  static saveBook(book) {
    const bookArray = Save.dataArray();
    bookArray.push(book);
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  static removeBook(event) {
    const removeArr = Save.dataArray();
    if (event.type === 'button') {
      removeArr.splice(event.value, 1);
      localStorage.setItem('bookArray', JSON.stringify(removeArr));
    }
  }
}
