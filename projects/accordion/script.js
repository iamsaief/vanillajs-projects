// Selectors
const panelItems = document.querySelectorAll(".accordion-panel-item");

panelItems.forEach((currentItem) => {
	currentItem.addEventListener("click", () => {
		currentItem.classList.toggle("active");
		panelItems.forEach((item) => {
			if (item !== currentItem) {
				item.classList.remove("active");
			}
		});
	});
});
