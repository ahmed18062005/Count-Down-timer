var timerInterval;
var hoursInput = document.getElementById("hours");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");

hoursInput.style.color = 'black';
minutesInput.style.color = 'black';
secondsInput.style.color = 'black';

function startTimer() {
    var hours = parseInt(hoursInput.value) || 0;
    var minutes = parseInt(minutesInput.value) || 0;
    var seconds = parseInt(secondsInput.value) || 0;

    var totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    disableInputs();
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (totalSeconds <= 0) {
            stopTimer();
            return;
        }

        totalSeconds--;
        var remainingHours = Math.floor(totalSeconds / 3600);
        var remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
        var remainingSeconds = totalSeconds % 60;

        document.getElementById("hours").value = remainingHours;
        document.getElementById("minutes").value = remainingMinutes;
        document.getElementById("seconds").value = remainingSeconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    enableInputs();
}

function disableInputs() {
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
}

function enableInputs() {
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
}