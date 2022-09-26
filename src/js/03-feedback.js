import { load, save, remove } from './storage';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

loadingPage();

feedbackForm.addEventListener('input', onInput);
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

function onFormSubmit(arguments) {
  // body
}



