/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Load {
  static listPopulate() {
    const listObj = document.getElementById('bookList');
    const container = document.getElementById('table-container');
    listObj.innerHTML = '';
    Save.dataArray().forEach((bookElement, index) => {
      listObj.innerHTML += `<tr><th scope="row" class='border border-secondary'>${index + 1}</th><td class='d-flex justify-content-between align-items-center'><p class='no-margin'><span class='bold-text'>'${bookElement.title}'</span> by ${bookElement.author}</p><button type='button' value="${index}" class='remove-btn btn btn-secondary text-center'>X</button></td></tr>`;
    });
    if (listObj.innerHTML === '') {
      container.classList.add('d-none');
    } else {
      container.classList.remove('d-none');
    }
  }
}