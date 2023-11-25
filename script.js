const form = document.querySelector('#form');
const newsletterCard = document.querySelector('.newsletter-card');
const success = document.querySelector('.success-card');

function validateEmail(input) {
  const email = input.value;
  const errorMsg = input.nextElementSibling;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    errorMsg.style.display = 'none';
    return true;
  } else {
    errorMsg.style.display = 'flex';
    return false;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');

  if (validateEmail(input)) {
    success.style.display = 'flex'; // Display the success message
    newsletterCard.style.display = 'none'; // Hide the form
    input.value = ''; // Clear the input field
  }
});

// Dismiss the success message when the "Dismiss message" button is clicked
success.querySelector('button').addEventListener('click', () => {
  success.style.display = 'none'; // Hide the success message
  newsletterCard.style.display = 'flex'; // Show the form again
});
