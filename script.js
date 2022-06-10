"use strict";
let myLibrary = [];

//BOOK CONSTRUCTOR
function Book(title, author, numOfPages, readStatus) {
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.readStatus = readStatus;
}
Book.prototype.info = function () {
	console.log(
		`${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.readStatus}`
	);
};
Book.prototype.toggleRead = function () {
	let stats = this.readStatus;

	stats === "read already"
		? (this.readStatus = "not read yet")
		: (this.readStatus = "read already");
};

//Add book to myLibrary Array and display the books
function addBookToLibrary(formData) {
	const title = formData.title;
	const author = formData.author;
	const pages = formData["book-pages"];
	const readStatus = formData["read-status"];
	const readStatusText =
		readStatus === "yes"
			? "read already"
			: readStatus === "no"
			? "not read yet"
			: "";

	if (title === "" && author === "") {
		return;
	}
	const newBook = new Book(title, author, pages, readStatusText);

	myLibrary.push(newBook);
	displayBook();
}

//Add html book card
function displayBook() {
	let books = document.querySelector(".books");
	books.innerHTML = "";

	myLibrary.forEach((book, index) => {
		const text = `<div class="book card" data-pos = '${index}'>
				<h2 class="book__title">
					<span>Title:</span> ${book.title}
					</h2>
					<p class="book__author">
					<span>Author:</span> ${book.author}
					</p>
				<p class="book__pages">
					<span>Pages:</span> ${book.numOfPages}
				</p>
				<p class="book__read-status">
				<span>Read Status:</span> ${book.readStatus}
				</p>
				<div class="book__btns flex">
				<button class="btn btn-toggle">Update</button>
				<button class="btn btn-del">Remove</button>
				</div>
				</div>`;
		books.innerHTML += text;
	});
}

//GET FORM DATA
function getFormData(e) {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target).entries());

	addBookToLibrary(data);
	document.querySelector(".modal").style.display = "none";
	document.querySelector("form").reset();
}