 let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let intervalId = null; // To store the setInterval ID

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    if (hr && min && sec) {
        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;
    }
}

// Start clock
function startClock() {
    if (!intervalId) {
        intervalId = setInterval(displayTime, 1000);
        displayTime(); // Show time immediately
    }
}

// Stop clock
function stopClock() {
    clearInterval(intervalId);
    intervalId = null;
}

// Optional: Start automatically on page load
// startClock();
