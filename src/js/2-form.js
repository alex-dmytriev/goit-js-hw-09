const formEl = document.querySelector('.feedback-form');
let formData = {};

// Utility functions
function fillForm(elem) {
  try {
    const getLsData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (getLsData === null) {
      return;
    }

    formData = getLsData;
    const formDataKeys = Object.keys(formData);

    formDataKeys.forEach(key => {
      formEl.elements[key].value = formData[key];
    });
  } catch (err) {
    console.log(err);
  }
}

// Logic functions / handlers
function onInput(e) {
  let currentValue = e.target.value.trim();
  if (e.target.name === 'email') {
    formData.email = currentValue;
  }
  if (e.target.name === 'message') {
    formData.message = currentValue;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = {};
  formEl.reset();
}

// Event Listeners
formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);

// Init functions
fillForm(formEl);
