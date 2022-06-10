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