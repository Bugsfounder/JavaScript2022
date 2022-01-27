console.log('JavaScript Creating an Alarm App: Exercise 6');

// YOU HAVE TO CREATE AN ALCARM CLOCK IN JAVASCRIPT (USE YOUR CREATIVITY) ALLOW USER TO SET ALARM FOR A CERTAIN TIME

let audio = new Audio('alarmSound.mp3');

let time = document.getElementById('time');
let alarmBtn = document.getElementById('alarmBtn');
let stopAlarmBtn = document.getElementById('stopAlarmBtn');

let newTime, timeNow;

setInterval(() => {
    timeNow = new Date();
    newTime = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
    time.setAttribute('value', newTime);
}, 1000);


const setAlarm = (e) => {
    e.preventDefault();
    let alarmTime = time.value;

    setInterval(() => {
        console.log(alarmTime, newTime);
    }, 1000);

    setInterval(() => {
        if (alarmTime === newTime) {
            audio.play();
            stopAlarmBtn.classList.remove('invisible');
            stopAlarmBtn.classList.add('visible');
            alarmBtn.classList.add('invisible');
            setInterval(() => {
                timeNow = new Date();
                newTime = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
                time.setAttribute('value', newTime);
            }, 1000);
        }
    }, 1000);
}


const stopAlarm = () => {
    audio.pause();
    stopAlarmBtn.classList.remove('visible');
    stopAlarmBtn.classList.add('invisible');
    alarmBtn.classList.add('visible');
}

alarmBtn.addEventListener('click', setAlarm);
stopAlarmBtn.addEventListener('click', stopAlarm);

