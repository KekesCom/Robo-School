const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');

const regexName = new RegExp(/^[\u0400-\u04FF]{2,}$/);
const regexEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\W+)?)$/);
const regexPhone = new RegExp(/^((\+7|\+8|7|8)*(9)+([0-9]){9})$/);

let formData = {
  name: {
    value: '',
    isValid: false
  },
  phone: {
    value: '',
    isValid: false
  },
  email: {
    value: '',
    isValid: false
  }
};

const handleNameValueChange = (event) => {
  formData.name.value = event.target.value;
  formData.name.isValid = true;
  nameInput.classList.remove('input--invalid');
};
nameInput.addEventListener('keydown', handleNameValueChange);
nameInput.addEventListener('paste', handleNameValueChange);
nameInput.addEventListener('input', handleNameValueChange);

const handlePhoneValueChange = (event) => {
  formData.phone.value = event.target.value;
  formData.phone.isValid = true;
  phoneInput.classList.remove('input--invalid');
};
phoneInput.addEventListener('keydown', handlePhoneValueChange);
phoneInput.addEventListener('paste', handlePhoneValueChange);
phoneInput.addEventListener('input', handlePhoneValueChange);

const handleEmailValueChange = (event) => {
  formData.email.value = event.target.value;
  formData.email.isValid = true;
  emailInput.classList.remove('input--invalid');
};
emailInput.addEventListener('keydown', handleEmailValueChange);
emailInput.addEventListener('paste', handleEmailValueChange);
emailInput.addEventListener('input', handleEmailValueChange);

const checkNameValidity = () => {
  const isValidValue = formData.name.value.match(regexName);
  formData.name.isValid = isValidValue;

  if (!isValidValue) {
    nameInput.classList.add('input--invalid');
    return;
  }

  nameInput.classList.remove('input--invalid');
};

const checkPhoneValidity = () => {
  const isValidValue = formData.phone.value.match(regexPhone);
  formData.phone.isValid = isValidValue;

  if (!isValidValue) {
    phoneInput.classList.add('input--invalid');
    return;
  }
  phoneInput.classList.remove('input--invalid');
};

const checkEmailValidity = () => {
  const isValidValue = formData.email.value.match(regexEmail);
  formData.email.isValid = isValidValue;

  if (!isValidValue) {
    emailInput.classList.add('input--invalid');
    return;
  }
  emailInput.classList.remove('input--invalid');
};

const clearInputs = () => {
  formData = {
    name: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    }
  };

  nameInput.value = '';
  phoneInput.value = '';
  emailInput.value = '';
};

const checkFormValidity = () => {
  checkNameValidity();
  checkPhoneValidity();
  checkEmailValidity();

  const formNativeValidity = form.checkValidity();
  const isAllInputsValid = Object.values(formData).filter((value) => !value.isValid).length === 0;
  const isFormValid = formNativeValidity && isAllInputsValid;

  if (!isFormValid) return;

  console.log({
    name: formData.name.value,
    phone: formData.phone.value,
    email: formData.email.value
  });

  clearInputs();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkFormValidity();
});
