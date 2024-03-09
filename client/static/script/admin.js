let timer; let timerInterval;
let timeLeft = 86400;

let electionStarted = false;

function startTimer() {
        electionStarted = true;
        document.getElementById('submit_candidate').disabled = true;
        document.getElementById('submit_candidate').disabled = true;
        timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "Election ended!";
    }
}

function addCandidate() {
    if (!electionStarted){
        console.log("Candidate added");
    }     
}
