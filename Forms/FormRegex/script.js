const form = document.querySelector('.form');
const firstname = document.getElementById('Firstname');
const lastname = document.getElementById('Lastname');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('ConfirmPassword');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]{2,30}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    
    let valid = true;

    function showError(input, message) {
        let errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
    }

    clearErrors();
    if (!nameRegex.test(firstname.value.trim())) {
        showError(firstname, 'Firstname must be 2-30 letters only.');
        valid = false;
    }
    if (!nameRegex.test(lastname.value.trim())) {
        showError(lastname, 'Lastname must be 2-30 letters only.');
        valid = false;
    }
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        valid = false;
    }
    if (!passwordRegex.test(password.value)) {
        showError(password, 'Password must be at least 8 chars, include uppercase, lowercase, number, and special character.');
        valid = false;
    }
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match.');
        valid = false;
    }    


    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
