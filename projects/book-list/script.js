// Getting UI Elements
let bookForm = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');

// Book Class
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI Class
class UI {
	static addToBookList(book) {
		let bookList = document.querySelector('#book-list');
		let row = document.createElement('tr');
		row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete-book">(x)</a></td>
        `;
		bookList.appendChild(row);
	}

	static clearInputFields() {
		let title = (document.querySelector('#title').value = '');
		let author = (document.querySelector('#author').value = '');
		let isbn = (document.querySelector('#isbn').value = '');
	}

	static showAlert(message, className) {
		let div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));

		let container = document.querySelector('.app-wrapper');
		let form = document.querySelector('#book-form');
		container.insertBefore(div, form);

		setTimeout(() => {
			document.querySelector('.alert').remove();
		}, 3000);
	}

	static deleteFromBookList(target) {
		if (target.hasAttribute('href')) {
			target.parentElement.parentElement.remove();
			Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
			UI.showAlert('Book deleted', 'success');
		}
	}
}

// Local Storage Class
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}

	static addBook(book) {
		let books = Store.getBooks();
		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
	}

	static displayBooks() {
		let books = Store.getBooks();
		books.forEach((book) => {
			UI.addToBookList(book);
		});
	}

	static removeBook(isbn) {
		let books = Store.getBooks();
		books.forEach((book, index) => {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

// Adding Event Listeners
bookForm.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());

function newBook(e) {
	e.preventDefault();

	let title = document.querySelector('#title').value;
	let author = document.querySelector('#author').value;
	let isbn = document.querySelector('#isbn').value;

	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('Please fill all the fields!', 'error');
	} else {
		let book = new Book(title, author, isbn);

		UI.addToBookList(book);
		UI.clearInputFields();
		UI.showAlert('Book added successfully', 'success');
		Store.addBook(book);
	}
}

function removeBook(e) {
	e.preventDefault();

	UI.deleteFromBookList(e.target);
}
