let searchBtn = document.querySelector('#searchBtn');
let userInput = document.querySelector('#searchInput');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
	let userText = userInput.value;
	if (userText != '') {
		// Fetch API
		fetch(`https://api.github.com/users/${userText}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message == 'Not Found') {
					// Show Alert
					ui.showAlert('User not found!', 'alert alert-danger');
				} else {
					// Show Profile Information
					ui.showProfile(data);
				}
			});
	} else {
		// Clear Profile
		ui.clearProfile();
		ui.showAlert('Invalid username', 'alert alert-danger');
	}
});
