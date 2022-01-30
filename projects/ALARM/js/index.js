console.log("JavaScript Alarm Clock Create By Manisha");

// FUNTIONS ARE HERE

// INITIALIZING A FUNCTION TO STORE ALARM TO LOCALSTORAGE THAT IS THE VALUE OF INPUTES ENTERED BY USER
const addAlarmToLocalStorage = () => {
    let alarms = [];
    let newAlarm = {
        alarmName: alarmName.value,
        alarmTime: alarmTime.value
    }
    if (localStorage.getItem('alarms') === null) {
        alarms = [];
        localStorage.setItem('alarms', JSON.stringify(alarms));
    } else {
        alarms = JSON.parse(localStorage.getItem('alarms'));
        alarms.push(newAlarm);
        localStorage.setItem('alarms', JSON.stringify(alarms));
        displayAllNotesToDOM();
        location.reload();
    }

}

// INITIALIZING A FUNCTION TO DELETE A PARTICULAR ALAM FORM LOCALSTORAGE ON CLICKING THE DELETE BUTTON ON THE DOM
const deleteAlarmFromLocalStorage = (e) => {
    let alarmName = e.target.parentElement.parentElement.children[1].innerText
    let alarmTime = e.target.parentElement.parentElement.children[2].innerText
    let alarms = JSON.parse(localStorage.getItem('alarms'));
    alarms.forEach((alarm, index) => {
        if (alarm.alarmName === alarmName && alarm.alarmTime === alarmTime) {
            alarms.splice(index, 1);
        }
    });
    localStorage.setItem('alarms', JSON.stringify(alarms));
    displayAllNotesToDOM();
    location.reload();
}

// INITIALIZING A FUNCTION TO DISPLAY ALL NOTES SAVED IN LOCALSTORAGE IN A TABULAR FORMATE USING JAVASCRIPT
const displayAllNotesToDOM = () => {
    let html = '';
    let alarms = localStorage.getItem('alarms');
    if (alarms === null || JSON.parse(alarms).length === 0) {
        document.getElementById('titles').innerHTML = `<h3 class="text-center">No Alarms to Display Please Set Alarm to Didplay<h3>`;
        table.style.display = 'none';
    } else {
        table.removeAttribute('style');
        document.getElementById('titles').innerHTML = ``;
        alarms = JSON.parse(alarms);
        alarms.forEach((element, index) => {
            html += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.alarmName}</td>
                <td>${element.alarmTime}</td>
                <td class="actionContainer">
                    <button class="btn danger deleteBtn">Delete</button>
                </td>
            </tr> `;
        });
        let alarmsContainer = document.getElementById('alarmsContainer');
        alarmsContainer.innerHTML = html;
    }
}

// INITIALIZNG A FUNCTION TO STOP ALARM ON CLICKING THE STOP ALARM BUTTON AND HIDE ID AFTER CLICKED
const stopAlarm = () => {
    audio.pause();
    stopAlarmBtn.setAttribute('hidden', 'true');
}

// INITIALIZING A FUNCTION TO CHECK ALL ALARMS SET IN LOCALSTORAGE AND IF TIME IS IT THEN PLAY THE AUDO
const setAlarm = () => {
    let nowTime = new Date();
    let formattedNowTime = nowTime.toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    let alarms = JSON.parse(localStorage.getItem('alarms'));
    for (alarm of alarms) {
        let alarmTime = new Date(alarm.alarmTime);
        let formattedalArmTime = alarmTime.toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        if (formattedNowTime === formattedalArmTime) {
            audio.pause();
            audio.play();
            stopAlarmBtn.removeAttribute('hidden');
        }
    }
}

// CALLING DISPLAY ALL NOTES FUNCTION TO DISPLAY ALL NOTES FROM LOCALSTORAGE
displayAllNotesToDOM();

// GLOBAL VARIALBES ARE HERE
let setAlarmBtn = document.getElementById('setAlarmBtn');
let alarmName = document.getElementById('alarmName');
let alarmTime = document.getElementById('alarmTime');
let deleteBtn = document.getElementsByClassName('deleteBtn');
let stopAlarmBtn = document.getElementById('stopAlarmBtn');

// ADDING EVENT LISTENNERS
setAlarmBtn.addEventListener('click', addAlarmToLocalStorage);
stopAlarmBtn.addEventListener('click', stopAlarm);

// ADDING EVENTLISTENNER TO ALL BUTTON WITH CLASS "deleteBtn"
for (let btn of deleteBtn) {
    btn.addEventListener('click', deleteAlarmFromLocalStorage)
}

// INITIALIZING AN AUDO OBJECT TO PLAY AND PAUSE ALARM SOUND
let audio = new Audio('../alarm.mp3');

// CHECKING THE ITEM OF LOCALSTORAGE IF ALARM WAS SET AND IT IS NOT EMPTY THEN CHECK EVERY SECOND ANY ALARM WAS COMMMING NOW OR NOT
if (localStorage.getItem('alarms') && JSON.parse(localStorage.getItem('alarms')).length >= 1) {
    setInterval(() => {
        setAlarm();
    }, 1000);
}