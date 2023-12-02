const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("book-pages").value;
  let read = document.getElementById("book-read").checked;

  let book = new Book(name, author, pages, read);
  myLibrary.push(book);
});
