let timerElem;
timerElem = document.getElementById("timer");
let timerValue = timerElem.textContent
let id = setInterval(function() {
	timerValue--;
	timerElem.textContent = timerValue;
	if (timerValue == 0) { 
		clearInterval(id);
        alert("Вы победили в конкурсе!");
	}
}, 1000);