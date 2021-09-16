/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Load {
  static listPopulate() {
    const listObj = document.getElementById('bookList');
    const container = document.getElementById('table-container');
    listObj.innerHTML = '';
    Save.dataArray().forEach((bookElement, index) => {
      listObj.innerHTML += `<tr><td class='d-flex justify-content-between align-items-center'><p class='no-margin'><span>'${bookElement.title}'</span> by ${bookElement.author}</p><button type='button' value="${index}" class='shadow border-dark remove-btn text-center'>Remove</button></td></tr>`;
    });
    if (listObj.innerHTML === '') {
      container.classList.add('d-none');
    } else {
      container.classList.remove('d-none');
    }
  }

  static pages() {
    const listObj = document.getElementById('list');
    const addNewObj = document.getElementById('add-new')
    const contactObj = document.getElementById('contact')

    listObj.addEventListener('click', Load.loadPage)
    addNewObj.addEventListener('click', Load.loadPage('add-new-container'))
    contactObj.addEventListener('click', Load.loadPage('contact-container'))
  }

  static loadPage(event) {
    const listObj = document.getElementById('table-container');
    const addNewObj = document.getElementById('add-new-container')
    const contactObj = document.getElementById('contact-container')

    console.log(event)
    if (event === 'table-container') {
      listObj.classList.remove('d-none')
      addNewObj.classList.add('d-none')
      contactObj.classList.add('d-none')
    } else if (event === 'add-new-container') {
      listObj.classList.add('d-none')
      addNewObj.classList.remove('d-none')
      contactObj.classList.add('d-none')
    } else if (event === 'contact-container') {
      listObj.classList.add('d-none')
      addNewObj.classList.add('d-none')
      contactObj.classList.remove('d-none')
    }
  }
}