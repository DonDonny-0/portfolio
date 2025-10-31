$(document).ready(function() {

  // jquery for toggle sub menu
  $('.sub-btn').click(function() {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  })

  // jquery for expand and collapse the sidebar
  $('.menu-btn').click(function() {
    $('.side-bar').addClass('active');
    $('.menu-btn').css('display', 'none');
  })

  $('.close-btn').click(function() {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css('display', 'block');
  })

})

const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();

  if (firstNameVal === '') {
    setError(firstName, 'First Name is Required');
  } else {
    setSuccess(firstName);
  }

  if (lastNameVal === '') {
    setError(lastName, 'Last Name is Required');
  } else {
    setSuccess(lastName)
  }

  if (emailVal === '') {
    setError(email, 'Email is Required');
  } else if (!isValidEmail(emailVal)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }


}