"use strict"

const secretNumber = Math.round(Math.random() * 20);
let messageDOM = document.querySelector('.message');
let currentScoreDOM = document.querySelector('.current-score');
let highScoreDOM = document.querySelector('.high-score');
let containerDOM = document.querySelector('.container').style;
let score = 20;
let storedScore = localStorage.getItem("highScore");
if (storedScore) {
    console.log(storedScore);
    highScoreDOM.textContent = storedScore
}
document.querySelector('.check').addEventListener('click', function () {
    let guess = +document.querySelector('.number-input').value;
    if (!guess) {
        messageDOM.textContent = "⚠ No Number...";
    } else if (guess === secretNumber) {
        messageDOM.textContent = "🏆 You Won...";
        if (storedScore) {
            if (score > storedScore) {
                highScoreDOM.textContent = score;
                localStorage.setItem("highScore", score);
            } else {
                highScoreDOM.textContent = storedScore;
            }
        }
        document.querySelector('.number').textContent = secretNumber;
        containerDOM.background = "rgba(65, 117, 5, 0.45)";
    } else if (guess > secretNumber) {
        if (score > 1) {
            messageDOM.textContent = "📈 Too High...";
            score--;
            currentScoreDOM.textContent = score;
        } else {
            messageDOM.textContent = "😞 You lose...";
            containerDOM.background = "rgba(208, 2, 27, 0.45)";
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            messageDOM.textContent = "📉 Too Low...";
            score--;
            currentScoreDOM.textContent = score;
        } else {
            messageDOM.textContent = "😞 You lose...";
            containerDOM.background = "rgba(208, 2, 27, 0.45)";
        }
    }
})