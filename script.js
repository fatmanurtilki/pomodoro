var minutes = 25;
    var seconds = 0;
    var timer;
    var isRunning = false;

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(updateTimer, 1000);
        }
    }

    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        stopTimer();
        minutes = 25;
        seconds = 0;
        updateDisplay();
    }

    function updateTimer() {
        if (minutes === 0 && seconds === 0) {
            stopTimer();
            alert("Pomodoro tamamlandı!");
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        updateDisplay();
    }
	function listen(){
	window.open('https://www.youtube.com/watch?v=MOKnTxzU4z0', '_blank');
   
	}

    function updateDisplay() {
        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timer").textContent = displayMinutes + ":" + displaySeconds;
    }

    function updateClock() {
        var now = new Date();
        var hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
        var minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
        var seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
        var date = now.toLocaleDateString();
        var timeString = date + " " + hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();