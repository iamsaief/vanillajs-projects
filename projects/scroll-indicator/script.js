const scrollIndicator = document.querySelector("#scroll-indicator");
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
	const widthPercentage = (window.scrollY / maxHeight) * 100;
	scrollIndicator.style.width = `${widthPercentage}%`;
});
