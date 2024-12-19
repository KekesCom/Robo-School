const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');

const regexName = /^[\u0400-\u04FF]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^(\+7|8|7)9\d{9}$/;

let formData = new Map([
  ['name', { value: '', isValid: false }],
  ['phone', { value: '', isValid: false }],
  ['email', { value: '', isValid: false }]
]);

const handleInputChange = (event, field, regex) => {
  const value = event.target.value;
  const isValid = regex.test(value);

  formData.set(field, { value, isValid });
  event.target.classList.toggle('input--invalid', !isValid);
};

const checkFieldValidity = (input, field, regex) => {
  const fieldData = formData.get(field);
  const isValid = regex.test(fieldData.value);

  formData.set(field, { ...fieldData, isValid });
  input.classList.toggle('input--invalid', !isValid);
};

const checkFormValidity = () => {
  checkFieldValidity(nameInput, 'name', regexName);
  checkFieldValidity(phoneInput, 'phone', regexPhone);
  checkFieldValidity(emailInput, 'email', regexEmail);

  const isFormValid = Array.from(formData.values()).every((field) => field.isValid);

  if (isFormValid) {
    console.log(Object.fromEntries(formData));
    clearInputs();
  }
};

const clearInputs = () => {
  formData.forEach((_, field) => {
    formData.set(field, { value: '', isValid: false });
  });
  [nameInput, phoneInput, emailInput].forEach((input) => (input.value = ''));
};

nameInput.addEventListener('input', (event) => handleInputChange(event, 'name', regexName));
phoneInput.addEventListener('input', (event) => handleInputChange(event, 'phone', regexPhone));
emailInput.addEventListener('input', (event) => handleInputChange(event, 'email', regexEmail));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkFormValidity();
});
