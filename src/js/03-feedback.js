import throttle from 'lodash.throttle';
import { load, save, remove } from './storage';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

loadingPage();

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onInput(e) {
  const { name, value } = e.target;
  const saveData = load(STORAGE_KEY) ?? {};

  saveData[name] = value;
  save(STORAGE_KEY, saveData);
}

function loadingPage() {
  const saveData = load(STORAGE_KEY);
  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return;
  }

  const userData = {};
  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  console.log(userData);
  remove(STORAGE_KEY);
  e.currentTarget.reset();
}
