const wordDisplay = document.getElementById('word-display');
const inputField = document.getElementById('input-field');
const wpmTag = document.getElementById('wpm');
const highScoreTag = document.getElementById('high-score');
const accuracyTag = document.getElementById('accuracy');
const timerTag = document.getElementById('timer');
const focusOverlay = document.getElementById('focus-overlay');
const resetBtn = document.getElementById('reset-btn');

let timer, maxTime = 60, timeLeft = maxTime;
let charIndex = 0, mistakes = 0, isTyping = false;

// Initialize High Score from LocalStorage
let highScore = localStorage.getItem('ej-best-wpm') || 0;
highScoreTag.innerText = highScore;

const textPool = [
    "The advance of technology is based on making it fit in so that you don't even notice it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Code is like humor. When you have to explain it, it's bad.",
    "The quick brown fox jumps over the lazy dog to test the mechanical keyboard keys."
];

function loadText() {
    const randomText = textPool[Math.floor(Math.random() * textPool.length)];
    wordDisplay.innerHTML = "";
    randomText.split("").forEach(char => {
        let span = `<span>${char}</span>`;
        wordDisplay.innerHTML += span;
    });
    wordDisplay.querySelectorAll('span')[0].classList.add('active');
}

function initTyping() {
    const characters = wordDisplay.querySelectorAll('span');
    let typedChar = inputField.value.split("")[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(startTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) { // Handle Backspace
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains('incorrect')) mistakes--;
                characters[charIndex].classList.remove('correct', 'incorrect');
            }
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add('correct');
            } else {
                mistakes++;
                characters[charIndex].classList.add('incorrect');
            }
            charIndex++;
        }

        characters.forEach(span => span.classList.remove('active'));
        if (charIndex < characters.length) characters[charIndex].classList.add('active');

        // Accuracy Calculation
        let acc = Math.round(((charIndex - mistakes) / charIndex) * 100);
        accuracyTag.innerText = acc < 0 || !acc ? 0 : acc;

        // Standard WPM Formula: (Correct Chars / 5) / (Time Spent in Minutes)
        let timeSpent = (maxTime - timeLeft) / 60; 
        let wpm = Math.round(((charIndex - mistakes) / 5) / timeSpent);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;

        // Check for new High Score
        if (wpm > highScore) {
            highScore = wpm;
            highScoreTag.innerText = highScore;
            localStorage.setItem('ej-best-wpm', highScore);
        }
    } else {
        clearInterval(timer);
        inputField.value = "";
    }
}

function startTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = 0;
    isTyping = false;
    inputField.value = "";
    timerTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    accuracyTag.innerText = 100;
    loadText();
}

// Event Listeners
inputField.addEventListener('input', initTyping);
resetBtn.addEventListener('click', resetGame);
inputField.addEventListener('paste', e => e.preventDefault());

// Focus Guard logic
window.addEventListener('blur', () => focusOverlay.classList.remove('hidden'));
focusOverlay.addEventListener('click', () => {
    focusOverlay.classList.add('hidden');
    inputField.focus();
});

// Capture global clicks to keep input focused
document.addEventListener('click', () => inputField.focus());
document.addEventListener('keydown', (e) => {
    if(e.key === "Tab") e.preventDefault(); // Don't let tab leave the page
});

loadText();
