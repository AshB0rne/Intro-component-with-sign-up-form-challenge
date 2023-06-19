// Declare global variables to use in the process
const allInput = document.querySelectorAll('input');
const firstName = document.querySelector('.first-name-input');
const lastName = document.querySelector('.last-name-input');
const email = document.querySelector('.email-input');
const pass = document.querySelector('.password-input');
const submitBtn = document.querySelector('.claim-btn');
const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const fnErrorIcon = document.querySelector('.FN-error-icon');
const lnErrorIcon = document.querySelector('.LN-error-icon');
const emailErrorIcon = document.querySelector('.email-error-icon');
const passErrorIcon = document.querySelector('.pass-error-icon');

// runs when the submit button is clicked
submitBtn.onclick = checkError = () => {
  if (true) {
    // runs if the firstname input is empty
    if (firstName.value === '') {
      firstNameError.style.display = 'block';
      firstNameError.innerText = 'First Name cannot be empty';
      firstName.style.borderColor = 'red';
      firstName.removeAttribute('placeholder');
      fnErrorIcon.style.display = 'block';
    } 

    // runs if the lastname input is empty
    if (lastName.value === '') {
      lastNameError.style.display = 'block';
      lastNameError.innerText = 'Last Name cannot be empty';
      lastName.style.borderColor = 'red';
      lastName.removeAttribute('placeholder');
      lnErrorIcon.style.display = 'block';
    } 

    // runs if the email address input is empty
    if (email.value === '') {
      emailError.style.display = 'block';
      emailError.innerText = 'Looks like this is not an email';
      email.style.borderColor = 'red';
      email.setAttribute('placeholder', 'email@example/com');
      emailErrorIcon.style.display = 'block';
      email.style.placeholder = 'red';
      email.classList.add('input-error');
    } 

    // runs and checks if the value of the email address input have a character " @ " and " .com ", then it runs the blocks of codes contained inside it 
    if (email.value.includes('@') && email.value.includes('.com')) {
      emailError.style.display = 'none';
      emailError.innerText = '';
      email.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
      email.setAttribute('placeholder', 'Email Address');
      emailErrorIcon.style.display = 'none';
    } 
    // runs with it's own specific conditions if the conditions above is not met
    else if (!email.value.includes('@') || !email.value.includes('.com')) { 
      emailError.style.display = 'block';
      emailError.innerText = 'Looks like this is not an email';
      email.style.borderColor = 'red';
      email.setAttribute('placeholder', 'email@example/com');
      emailErrorIcon.style.display = 'block';
      email.onkeyup = () => {
        if (email.value.includes('@') && email.value.includes('.com')) {
          emailError.style.display = 'none';
          emailError.innerText = '';
          email.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
          email.setAttribute('placeholder', 'Email Address');
          emailErrorIcon.style.display = 'none';
        } else if (!email.value.includes('@') && !email.value.includes('.com')) {
          emailError.style.display = 'block';
          emailError.innerText = 'Looks like this is not an email';
          email.style.borderColor = 'red';
          email.setAttribute('placeholder', 'email@example/com');
          emailErrorIcon.style.display = 'block';
        }
      }
    }

    // runs if the password input is empty
    if (pass.value === '') {
      passwordError.style.display = 'block';
      passwordError.innerText = 'Password cannot be empty';
      pass.style.borderColor = 'red';
      pass.removeAttribute('placeholder');
      passErrorIcon.style.display = 'block';
    }
  }
  
}

// runs when the firsname input is focused on
firstName.onfocus = () => {
  firstNameError.style.display = 'none';
  firstName.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
  fnErrorIcon.style.display = 'none';
}
// runs when the lastname input is focused on
lastName.onfocus = () => {
  lastNameError.style.display = 'none';
  lastName.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
  lnErrorIcon.style.display = 'none';
}
// runs when the email address input is focused on
email.onfocus = () => {
  emailError.style.display = 'none';
  email.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
  emailErrorIcon.style.display = 'none';
  email.classList.remove('input-error');
}
// runs when the password input is focused on
pass.onfocus = () => {
  passwordError.style.display = 'none';
  pass.style.borderColor = 'hsl(249, 10%, 26%, 0.2)';
  passErrorIcon.style.display = 'none';
}