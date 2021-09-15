/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Load {
  static listPopulate() {
    const listObj = document.getElementById('bookList');
    const container = document.getElementById('table-container');
    listObj.innerHTML = '';
    Save.dataArray().forEach((bookElement, index) => {
      listObj.innerHTML += `<tr><td class='d-flex justify-content-between align-items-center'><p class='no-margin'><span>'${bookElement.title}'</span> by ${bookElement.author}</p><button type='button' value="${index}" class='remove-btn text-center'>Remove</button></td></tr>`;
    });
    if (listObj.innerHTML === '') {
      container.classList.add('d-none');
    } else {
      container.classList.remove('d-none');
    }
  }
}