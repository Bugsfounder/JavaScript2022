console.log("JavaScript Ajax Tutorial");

let fetchBtn = document.getElementById('fetchBtn');
let backupBtn = document.getElementById('backupBtn');
let postBtn = document.getElementById('postBtn');
let copy = document.getElementById('copy');
let query = document.getElementById('query');
let data = document.getElementById('data');
let fetchFruit = document.getElementById('fetchFruit');
let fetchVegetable = document.getElementById('fetchVegetable');

fetchBtn.addEventListener('click', fetchRequestButtonHandler);
postBtn.addEventListener('click', getRequestButtonHandler);
backupBtn.addEventListener('click', clear);
copy.addEventListener('click', copyResponse);
fetchFruit.addEventListener('click', fetchFruitsButton);
fetchVegetable.addEventListener('click', fetchVegetablesButton);

function fetchRequestButtonHandler() {
    console.log("Fetch Data button Clicked");

    // INSTANTIATE AN XHR OBJECT
    const xhr = new XMLHttpRequest();

    // OPEN THE OBJECT
    // xhr.open('GET', 'manisha.txt', true);

    // SEND REQUEST TO URL
    if (query.value.length !== 0) {
        // MAKE GET REQUEST
        xhr.open('GET', `https://www.googleapis.com/customsearch/v1?key=AIzaSyC33v4CX1dLGyZsN8At7mW98mzXlboi6iM&cx=ab9771d658efc8801&q=${query.value}`, true);
    } else {
        data.innerHTML = `<h3 style="color: red;">Please Enter Something to Search</h3>`;
    }

    // WHAT TO DO ON PROGRESS (OPTIONAL)
    xhr.onprogress = function () {
        query.value = '';
        data.innerText = "Progress...."
        console.log("On Progress.....");
    }
    xhr.onreadystatechange = function () {
        console.log("on ready state change", xhr.readyState);
    }

    // WHAT TO DO WHEN RESPONSE IS READY
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            data.innerText = this.responseText;
        } else {
            console.log("Some Error Ocurred");
        }
    }

    // SEND THE REQUEST
    xhr.send();

    console.log("we are done!");
}

function getRequestButtonHandler() {

    // INITIATE XHR OBJECT
    let xhr = new XMLHttpRequest();

    // OPEN THE OBJECT
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.getResponseHeader('Content-type', 'application-json');


    // WHAT TO DO WHEN REQUEST IS IN PROGRESS
    xhr.onprogress = function () {
        data.innerText = "loading....";
    }

    // WHAT TO DO WHEN EVERYTHING IS DONE
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            data.innerText = this.responseText;
        } else {
            data.innerText = 'Something went wrong. Please Check Parameters and try again! or To Many Request to this url';
            console.log("something went wrong....");
        }
    }

    let params = `${query.value}`;
    xhr.send(params);
}

function clear() {
    query.value = '';
    data.innerText = 'Everything Cleared';
    setTimeout(() => {
        data.innerText = 'Your Response Display Here';
    }, 1000);
}

function copyResponse() {
    navigator.clipboard.writeText(data.innerText);
}

function fetchVegetablesButton() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'vegetables.json', true);
    xhr.onload = function () {
        console.log(this.responseText);
        data.innerText = this.responseText;
    }
    xhr.send();
}

function fetchFruitsButton() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'fruits.json', true);
    xhr.onload = function () {
        console.log(this.responseText);
        data.innerText = this.responseText;
    }
    xhr.send();
}