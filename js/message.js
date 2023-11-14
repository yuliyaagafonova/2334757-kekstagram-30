const successMessageTemplate = document.querySelector('#success')
  .content.querySelector('.success');

const errorMessageTemplate = document.querySelector('#error')
  .content.querySelector('.error');

const hideMessage = () => {
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  existElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

const onCloseButtonClick = () => {
  hideMessage();
};

const showMessage = (element, classButton) => {
  document.body.append(element);
  const button = element.querySelector(classButton);
  button.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onBodyClick);
};

function onBodyClick (evt) {
  if (evt.target.closest('.sucess__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  hideMessage();
}

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

const showSuccessMessage = () => {
  showMessage(successMessageTemplate, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessageTemplate, '.error__button');
};

export { showSuccessMessage, showErrorMessage };
