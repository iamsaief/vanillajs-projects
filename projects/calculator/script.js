const invalidCombinations = {
	"+": { "+": 1, "*": 1, "/": 1 },
	"-": { "-": 1, "+": 1, "*": 1, "/": 1 },
	"*": { "*": 1, "/": 1 },
	"/": { "+": 1, "*": 1, "/": 1 },
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
	btn.addEventListener("click", handleCalculate);
});

window.addEventListener("keydown", handleCalculate);

function handleCalculate(e) {
	const input = document.querySelector(".input-value");
	let selectedBtn;
	let timeoutId;
	const displayValue = input.textContent;
	const numbers = [".", "00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const operatos = ["/", "*", "-", "+"];
	let textContent;

	if (timeoutId) clearTimeout(timeoutId);

	if (e.type === "keydown") {
		selectedBtn = [...buttons].find((btn) => btn.innerHTML === e.key);
		if (selectedBtn) {
			selectedBtn.classList.add("active");

			timeoutId = setTimeout(() => {
				if (selectedBtn.classList.contains("active")) {
					selectedBtn.classList.remove("active");
				}
			}, 200);
		}
		textContent = e.key;
	} else {
		textContent = e.target.textContent;
	}

	if (textContent === "AC") {
		input.innerText = "";
	}
	if (textContent === "C" || textContent === "Backspace") {
		input.textContent = displayValue.slice(0, -1);
	}
	if (operatos.indexOf(textContent) !== -1) {
		const lastDisplayChar = displayValue[displayValue.length - 1];
		if (operatos.includes(lastDisplayChar) && invalidCombinations[lastDisplayChar][textContent]) {
			return;
		} else {
			input.innerText += textContent;
		}
	}
	if (numbers.indexOf(textContent) !== -1) {
		const lastDisplayDigit = displayValue[displayValue.length - 1];
		if ((displayValue.includes(".") || lastDisplayDigit === ".") && textContent === ".") return;
		else {
			input.innerText += textContent;
		}
	}
	if (textContent === "=" || textContent === "Enter") {
		try {
			input.innerText = eval(input.innerText);
		} catch (error) {
			input.innerText = error.name;
		}
	}
}
