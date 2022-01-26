console.log("JavaScript Fetch API Tutorial");

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// FETCHING DATA FROM LOCAL FILE
const getData = url => {
    console.log('Started getData()');
    fetch(url)
        .then(response => { console.log('inside first then'); return response.text() })
        .then(data => console.log("inside second then\n", data));
}

// console.log("Before running getData()");
// getData('manisha.txt')
// console.log("After running getData()");


// FETCHING DATA FROM AN ENDPOINT ---> https://api.github.com/users
const getUsersData = url => {
    fetch(url).then(response => response.json()).then(data => console.log(data));
}

// getUsersData('https://api.github.com/users');

// FETCHING DATA FROM AN ENDPOINT ---> https://api.github.com/users
const postData = (url, body) => {
    let params = {
        method: "post",
        headers: { 'Content-type': 'application-json' },
        body: JSON.stringify(body)
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data));
}

let user = { "name": "manisha", "job": "coder" };

postData('https://reqres.in/api/users', user)