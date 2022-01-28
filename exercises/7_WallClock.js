console.log("JavaScript Wall Clock: Exercise 7");

// MY TIME FUNCTION THAT SET TIME THE TIME ID IN THE DOM LIKE THIS:- HH:MM:SS AM/PM
const myTime = () => {
    setInterval(() => {
        let time = document.getElementById('time');
        let date = new Date();
        let foramtedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true });
        time.innerText = foramtedTime;
    }, 1000);
}

myTime();