// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firtsName = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    let letters = /^[a-zA-Z]$/;

    if (firtsName.value.length < 3) {
        firtsName.classList.add('invalid');
        errorName.innerHTML = "Name must be at least 3 characters";
        errorName.style.display = 'inline';
    } else {
        firtsName.classList.add('invalid');
        errorName.style.display = 'inline';
    }

    if(phone.value.length < 3){
        phone.classList.add("invalid");
        errorPhone.innerHTML = "Phone must be at least 3 numbers"
        errorPhone.style.display="inline";
    } else {
        phone.classList.remove("invalid");
        errorPhone.style.display="none";
    }
}