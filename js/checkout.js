// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var email = document.querySelector('.email');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    let letters = /^[a-zA-Z]+$/;

    if (firstName.value.length < 3) {
        firstName.classList.add('invalid');
        errorName.innerHTML = "Name must be at least 3 characters";
        errorName.style.display = 'inline';
    } else if (!firstName.value.match(letters)) {
        firstName.classList.add('invalid');
        errorName.style.display = 'inline';
    } else {
        firstName.classList.remove("invalid");
        errorName.style.display="none";
    }

    if(phone.value.length < 3){
        phone.classList.add("invalid");
        errorPhone.innerHTML = "Phone must be at least 3 numbers"
        errorPhone.style.display="inline";
    } else {
        phone.classList.remove("invalid");
        errorPhone.style.display="none";
    }

    if(email.value.length < 3){
        email.classList.add("invalid");
        errorEmail.innerHTML = "Email must be at least 3 characters"
        errorEmail.style.display="inline";
    } else if(email.validity.typeMismatch) {
        email.classList.add("invalid");
        errorEmail.style.display="inline";
    } else {
        email.classList.remove("invalid");
        errorEmail.style.display="none";
    }
}