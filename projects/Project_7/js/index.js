console.log("Calculator");

// VARIABLES ARE HERE 
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        try {
            if (event.target.innerText === 'C') {
                screen.value = '';
                screenValue = '';
            } else if (event.target.innerText === 'X') {
                screenValue += "*";
                screen.value = screenValue;
            } else if (event.target.innerText === "=") {
                screen.value = eval(screenValue);
                screenValue = '';
            } else {
                screenValue += event.target.innerText;
                screen.value = screenValue;
            }
        } catch (error) {
            screen.value = "Wrong Equation";
            screenValue = '';
            setTimeout(() => {
                screen.value = "";
            }, 5000);
        }
    });
}

