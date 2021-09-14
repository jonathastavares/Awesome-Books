/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Load {
  static listPopulate() {
    const listObj = document.getElementById('bookList');
    listObj.innerHTML = '';
    Save.dataArray().forEach((bookElement, index) => {
      listObj.innerHTML += `<li class='text-center '>Book Name: ${bookElement.title} Book Author: ${bookElement.author} <br> <button type='button' value="${index}" class='remove-btn btn btn-secondary text-center mt-2'>Remove</button></li><br>`;
    });
  }
}