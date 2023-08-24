function startCountdown() {
	const daysElement = document.getElementById("days");
	const hoursElement = document.getElementById("hours");
	const minutesElement = document.getElementById("minutes");
	const secondsElement = document.getElementById("seconds");

	const countdown = setInterval(function () {
		let days = parseInt(daysElement.textContent);
		let hours = parseInt(hoursElement.textContent);
		let minutes = parseInt(minutesElement.textContent);
		let seconds = parseInt(secondsElement.textContent);

		if (seconds > 0) {
			seconds--;
			secondsElement.textContent = seconds.toString().padStart(2, "0");
		} else {
			if (minutes > 0) {
				minutes--;
				minutesElement.textContent = minutes.toString().padStart(2, "0");

				seconds = 59;
				secondsElement.textContent = seconds.toString().padStart(2, "0");
			} else {
				if (hours > 0) {
					hours--;
					hoursElement.textContent = hours.toString().padStart(2, "0");

					minutes = 59;
					minutesElement.textContent = minutes.toString().padStart(2, "0");

					seconds = 59;
					secondsElement.textContent = seconds.toString().padStart(2, "0");
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
					} else {
						clearInterval(countdown);
					}
				}
			}
		}

		// daysElement.textContent = days.toString().padStart(2, "0");
		// hoursElement.textContent = hours.toString().padStart(2, "0");
		// minutesElement.textContent = minutes.toString().padStart(2, "0");
		// secondsElement.textContent = seconds.toString().padStart(2, "0");
	}, 1000);
}

// Запуск счетчика
startCountdown();