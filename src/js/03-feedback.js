import { load, save, remove } from './storage';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onFormSubmit);


function onInput(e) {
    const { name, value } = e.target;
    const saveData = load(STORAGE_KEY) ?? {};

    saveData[name] = value;
    save(STORAGE_KEY, saveData);
}

function onFormSubmit(arguments) {
  // body
}



