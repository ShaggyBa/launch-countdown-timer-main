const phrases = [
	"We're launching soon",
	"Expect a phrase change",
	"What kind of phrase",
	"Lorem ipsum dolor sit amet",
	"I will sell a startup for a million tenge",
	"Build a rocket",
	"Collecting a harem through",
	"I'll get a job through",
	"I will finish my task in",
]

const randPhrase = phrases[Math.floor(Math.random() * phrases.length)]

const launchingPhrase = document.getElementById("launching-phrase")

launchingPhrase.textContent = randPhrase

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function loadTimer() {
	if (localStorage.getItem("days")) {
		daysElement.textContent = localStorage.getItem("days");
	}
	if (localStorage.getItem("hours")) {
		hoursElement.textContent = localStorage.getItem("hours");
	}
	if (localStorage.getItem("minutes")) {
		minutesElement.textContent = localStorage.getItem("minutes");
	}
	if (localStorage.getItem("seconds")) {
		secondsElement.textContent = localStorage.getItem("seconds");
	}
	
}

loadTimer()

function startCountdown() {

	const countdown = setInterval(function () {
		let days = parseInt(daysElement.textContent);
		let hours = parseInt(hoursElement.textContent);
		let minutes = parseInt(minutesElement.textContent);
		let seconds = parseInt(secondsElement.textContent);

		if (seconds > 0) {
			seconds--;
			secondsElement.textContent = seconds.toString().padStart(2, "0");

			localStorage.setItem("seconds", secondsElement.textContent);

		} else {
			if (minutes > 0) {
				minutes--;
				minutesElement.textContent = minutes.toString().padStart(2, "0");

				seconds = 59;
				secondsElement.textContent = seconds.toString().padStart(2, "0");

				localStorage.setItem("minutes", minutesElement.textContent);

			} else {
				if (hours > 0) {
					hours--;
					hoursElement.textContent = hours.toString().padStart(2, "0");

					minutes = 59;
					minutesElement.textContent = minutes.toString().padStart(2, "0");

					seconds = 59;
					secondsElement.textContent = seconds.toString().padStart(2, "0");

					localStorage.setItem("hours", hoursElement.textContent);

				} else {
					if (days > 0) {
						days--;
						daysElement.textContent = days.toString().padStart(2, "0");

						hours = 23;
						hoursElement.textContent = hours.toString().padStart(2, "0");

						minutes = 59;
						minutesElement.textContent = minutes.toString().padStart(2, "0");

						seconds = 59;
						secondsElement.textContent = seconds.toString().padStart(2, "0");

						localStorage.setItem("days", daysElement.textContent);

					} else {
						clearInterval(countdown);
					}
				}
			}
		}
	}, 1000);
}

startCountdown();