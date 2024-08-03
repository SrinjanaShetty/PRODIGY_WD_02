let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lap-list');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let lap = 1;

startBtn.addEventListener('click', function() {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function() {
    timer = false;
});

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lap = 1;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    lapList.innerHTML = '';
});

lapButton.addEventListener('click', function() {
    if (timer) {
        const lapTime = `${pad(hour)}:${pad(minute)}:${pad(second)}:${pad(count)}`;
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${lap}: ${lapTime}`;
        lapList.appendChild(lapElement);
        lap++;
    }
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

const poem = `Time's gentle hand moves slow, Moments lost, like grains of snow.

Hours tick by, like falling leaves, Memories made, and moments breathe.

In the past, we find our tears, In the future, our hopes and fears.

But in the present, we find our way, To cherish each moment, night and day.

So let us hold each moment dear, And make the most of time that's here.

For time keeps moving, slow and fast, And we must make each moment last.`;

const poemElement = document.getElementById('poem');
let i = 0;

function typePoem() {
    if (i < poem.length) {
        poemElement.innerHTML += poem[i];
        i++;
        setTimeout(typePoem, 50); // adjust the speed here
    } else {
        setTimeout(erasePoem, 2000); // wait 2 seconds before erasing
    }
}

function erasePoem() {
    poemElement.innerHTML = '';
    i = 0;
    setTimeout(typePoem, 500); // wait 0.5 seconds before typing again
}

typePoem();