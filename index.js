const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {
	timer = setInterval(function () {
		sec = seconds % 60
		min = seconds / 60 % 60
		hour = seconds / 60 / 60 % 60
		if (seconds <= 0) {
			clearInterval(timer);
			alert("Timer End");
		} else {
			let strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${sec}`;
			timerEl.innerHTML = strTimer;
		}
		--seconds;
	}, 1000)
};

inputEl.addEventListener('input', (e) => {
	const value = e.target.value
	e.target.value = value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);

	createTimerAnimator(seconds);

	inputEl.value = '';
});
