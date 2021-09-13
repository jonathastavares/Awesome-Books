var title = document.getElementById('title').value;
var author = document.getElementById('author').value;
addEventListener

function Book(title, author) {
    this.title = title;
    this.author = author;
    console.log('Book Created!');
    console.log(this.title);
    console.log(this.author);
};