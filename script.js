let myLibrary = [
  { name: "Hobbit", author: "Tolkien", pages: "310", read: false, id: "998" },
  {
    name: "Harry Potter and the Philosophers Stone",
    author: "J.K.Rowling",
    pages: "223",
    read: true,
    id: "999",
  },
];

showBooks();

function Book(name, author, pages, read, id) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}
let id_counter = 0;

const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = document.getElementById("book_pages").value;
  let read = document.getElementById("book_read").checked;
  let id = id_counter.toString();
  id_counter++;

  let book = new Book(name, author, pages, read, id);
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
  info_name.setAttribute("id", "title");
  let info_author = document.createElement("p");
  let info_pages = document.createElement("p");
  let delete_btn = document.createElement("button");
  let break_line = document.createElement("br");
  delete_btn.setAttribute("id", "del_btn");
  delete_btn.setAttribute("type", "button");
  delete_btn.innerText = "Delete";
  let info_read = document.createElement("button");
  info_read.classList.add("check_btn");
  info_read.setAttribute("type", "button");
  changeButton(book.read, info_read);
  info_name.innerHTML = `Name: ${book.name}`;
  info_author.innerHTML = `Author: ${book.author}`;
  info_pages.innerHTML = `No. of pages: ${book.pages}`;
  book_box.setAttribute("id", `${book.id}`);

  delete_btn.addEventListener("click", () => {
    deleteBook(book_box);
  });

  info_read.addEventListener("click", () => {
    changeReadStatus(book, myLibrary);
    changeButton(book.read, info_read);
    showBooks();
  });

  book_box.appendChild(info_name);
  book_box.appendChild(info_author);
  book_box.appendChild(info_pages);
  book_box.appendChild(info_read);
  book_box.appendChild(delete_btn);
  book_box.insertBefore(break_line, delete_btn);

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

function deleteBook(books) {
  myLibrary.forEach((book) => {
    let index = myLibrary.indexOf(book);
    if (book.id === books.id) {
      myLibrary.splice(index, 1) && books.remove();
    }
  });
}

function changeReadStatus(books, myLibrary) {
  myLibrary.forEach((book) => {
    if (book.id === books.id) {
      book.read = !book.read;
    }
  });
}

function changeButton(status, button) {
  status
    ? ((button.style.backgroundColor = "#4FFFB0"),
      (button.style.color = "#333D51"),
      (button.innerText = "READ"))
    : ((button.style.backgroundColor = "#E2495B"),
      (button.style.color = "#F4F3EA"),
      (button.innerText = "NOT READ"));

  return button;
}
