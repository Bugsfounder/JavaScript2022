console.log("JavaScript Project 4: Form Validation using Regular Expressions");

const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');
const success = document.getElementById('success');
let isValidEmail = false;
let isValidPhone = false;
let isValidName = false;

username.addEventListener('blur', () => {
    console.log('name was blured');
    // VALIDATE NAME HERE
    let nameRegex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let name = username.value;
    if (nameRegex.test(name)) {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        console.log("matched username: " + name);
        isValidName = true;
    } else {
        isValidName = false;
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
        console.log("username not matched");
    }
});

email.addEventListener('blur', () => {
    console.log('eamil was blured');
    // VALIDATE EMAIL HERE
    const emailRegex = /^([_\-\.a-zA-Z0-9]+)@([_\.\-\0-9a-zA-Z]+)\.([a-zA-Z]+){2,7}$/;

    let validEmail = email.value;
    if (emailRegex.test(validEmail)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        console.log("matched email: " + validEmail);
        isValidEmail = true;
    } else {
        isValidEmail = false;
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        console.log("email not matched");
    }

});

phone.addEventListener('blur', () => {
    console.log('phone was blured');
    // VALIDATE PHONE HERE
    const phoneRegex = /^([0-9]){10}$/;

    let validPhone = phone.value;
    if (phoneRegex.test(validPhone)) {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        console.log("matched phone: " + validPhone);
        isValidPhone = true;
    } else {
        isValidPhone = false;
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        console.log("phone not matched");
    }
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You Clicked on Submit Button');
    if (isValidPhone && isValidName && isValidEmail) {
        console.log('phone email and user are valid', newUser);
        // SUBMIT YOUR FORM HERE

        success.classList.add('show');
        success.classList.remove('alert-danger');
        success.classList.add('alert-success');

        success.innerHTML = `<strong>Success!</strong> Your Travel has been Submitted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    } else {
        console.log('phone email and user are not valid');

        success.classList.add('show');
        success.classList.add('alert-danger');
        success.classList.remove('alert-success');

        success.innerHTML = `<strong>Error!</strong> Invalid Input Please Check and Try again!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    }
    setTimeout(() => {
        success.classList.remove('show');
    }, 2000);
});
