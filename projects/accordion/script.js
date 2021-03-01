// Selectors
const panelItems = document.querySelectorAll(".accordion-panel-item");

panelItems.forEach((currentItem) => {
	const headerHeight = currentItem.querySelector(".accordion-panel-header").offsetHeight;
	const contentHeight = currentItem.querySelector(".accordion-panel-content").offsetHeight;

	if (currentItem.classList.contains("active")) {
		currentItem.style.height = `${currentItem.offsetHeight}px`;
	} else {
		currentItem.style.height = `${headerHeight}px`;
	}

	// adding .active and updating heights
	currentItem.addEventListener("click", () => {
		if (!currentItem.classList.contains("active")) {
			currentItem.classList.add("active");
			currentItem.style.height = `${headerHeight + contentHeight}px`;
		} else {
			currentItem.classList.remove("active");
			currentItem.style.height = `${headerHeight}px`;
		}

		// removing .active from item that hasn't clicked
		panelItems.forEach((item) => {
			if (item !== currentItem) {
				item.classList.remove("active");
				item.style.height = `${headerHeight}px`;
			}
		});
	});
});
