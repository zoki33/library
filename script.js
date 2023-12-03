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
  showBooks();
});

function showBooks() {
  let container = document.getElementById("book-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    container.appendChild(bookBoxCreate(book));
  });
}

function bookBoxCreate(book) {
  let book_box = document.createElement("div");
  book_box.classList.add("book_box");
  let info_name = document.createElement("p");
  let info_author = document.createElement("p");
  let info_pages = document.createElement("p");
  let read_label = document.createElement("label");
  read_label.setAttribute("for", "checky");
  read_label.innerText = "Read/Not Read: ";
  let info_read = document.createElement("INPUT");
  info_read.setAttribute("id", "checky");
  info_read.setAttribute("type", "checkbox");
  info_read.checked = book.read;
  info_read.setAttribute("value", book.read.toString());
  info_name.innerHTML = `Book name: ${book.name}`;
  info_author.innerHTML = `Author's name: ${book.author}`;
  info_pages.innerHTML = `No. of pages: ${book.pages}`;

  book_box.appendChild(info_name);
  book_box.appendChild(info_author);
  book_box.appendChild(info_pages);
  book_box.appendChild(read_label);
  book_box.appendChild(info_read);

  return book_box;
}

let dialog = document.getElementById("add_Book");
let show_dialog = document.getElementById("show_dialog");
let cancel_btn = document.getElementById("cancel");

show_dialog.addEventListener("click", () => {
  dialog.showModal();
});

cancel_btn.addEventListener("click", () => {
  dialog.close();
});
