const hourHand = document.querySelector("#hour-hand");
const minHand = document.querySelector("#min-hand");
const secHand = document.querySelector("#sec-hand");

function setTime() {
	const now = new Date();

	const secs = now.getSeconds();
	const secDegrees = (secs / 60) * 360;
	secHand.style.transform = `rotateZ(${secDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = (mins / 60) * 360;
	minHand.style.transform = `rotateZ(${minDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = (hours / 12) * 360 + (mins / 60) * 30;
	hourHand.style.transform = `rotateZ(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);
