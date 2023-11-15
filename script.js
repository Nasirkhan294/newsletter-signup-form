const form = document.querySelector('#form');


function validateEmail(input) {
    const email = input.value;
    const errorMsg = document.querySelector('.error-msg');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email)) {
        errorMsg.style.display = 'none';
        return true;
    } else {
        errorMsg.style.display = 'flex';
        return false
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if(validateEmail(input)) {
        form.submit();
        input.value = '';
    }
})
