let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = document.getElementById("book_pages").value;
  let read = document.getElementById("book_read").checked;

  let book = new Book(name, author, pages, read);
  myLibrary = [...myLibrary, book];
  form.reset();
});

const openBtn = document.getElementById("btn-library");

openBtn.addEventListener("click", showBooks);

function showBooks() {
  let container = document.getElementById("book-container");

  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    let info = document.createElement("p");
    info.innerHTML = `Book name: ${myLibrary[i].name}`;
    book.appendChild(info);
    container.appendChild(book);
  }
  window.location = "./homepage.html";
}
