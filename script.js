const errorMsg = document.querySelector('.error-msg');
const input = document.querySelector('input');
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value === '') {
        errorMsg.style.display = 'flex';
    } else {
        errorMsg.style.display = 'none'
    }
})