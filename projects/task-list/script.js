// Define UI Elements
let form = document.querySelector('#task_form');
let taskList = document.querySelector('#task_ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#task_input');

// Define Event Listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);

// Add Task
function addTask(e) {
	e.preventDefault();

	if (taskInput.value === '') {
		alert('Please Add a task');
	} else {
		// Create li element with delete (x) button
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + ' '));
		taskList.appendChild(li);

		let del = document.createElement('a');
		del.setAttribute('href', '#');
		del.innerHTML = '(x)';
		li.appendChild(del);

		storeInLocalStorage(taskInput.value);
		taskInput.value = '';
	}
}

// Remove Task
function removeTask(e) {
	if (e.target.hasAttribute('href')) {
		if (confirm('Are you sure?')) {
			let ele = e.target.parentElement;
			ele.remove();
			removeFromlocalStorage(ele);
		}
	}
}

function removeFromlocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	let li = taskItem;
	li.removeChild(li.lastChild); // <a>(x)</a>

	tasks.forEach((task, index) => {
		if (li.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask(e) {
	if (confirm('Tasks list will be deleted, are you sure?')) {
		taskList.innerHTML = '';
		localStorage.clear();
	}
}

// Task Filter
function filterTask(e) {
	let userInput = e.target.value.toLowerCase();

	document.querySelectorAll('#task_ul li').forEach((task) => {
		let item = task.firstChild.textContent;

		if (item.toLowerCase().indexOf(userInput) !== -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}

// Store task in localStorage
function storeInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task) => {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(task + ' '));
		taskList.appendChild(li);

		let del = document.createElement('a');
		del.setAttribute('href', '#');
		del.innerHTML = '(x)';
		li.appendChild(del);
	});
}
