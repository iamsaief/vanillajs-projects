const tabWrapper = document.querySelector(".tab-wrapper");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-contents .content");

tabWrapper.addEventListener("click", (e) => {
	const id = e.target.dataset.target;
	if (id) {
		// remove active from other buttons
		tabBtns.forEach((btn) => {
			btn.classList.remove("active");
			e.target.classList.add("active");
		});
		// hide other tabContents
		tabContents.forEach((content) => {
			content.classList.remove("active");
		});
		const currentContent = document.getElementById(id);
		currentContent.classList.add("active");
	}
});
