function showInputError(formElement, inputElement, { inputErrorClass }) {
  //showInputError//
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(inputErrorClass);
}

function hideInputError(formElement, inputElement, { inputErrorClass }) {
  //showInputError//
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(inputErrorClass);

  function checkInputValidity(formElement, inputElement, options) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, options);
    } else {
      hideInputError(formElement, inputElement, options);
    }
  }

  function toggleButtonState(
    inputElements,
    submitButton,
    { inactiveButtonClass }
  ) {
    const foundInvalid = false;

    inputElements.forEach((inputElements) => {
      if (!inputElement.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  }
}

function setEventListener(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(".modal__button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement.options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );
  //   [...]= the same as Array.from, more modern way of doing it
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListener(formElement, options);

    //look for all inputs inside of form
    //loop through all inputs to see if all are valid
    //if any input is not valid
    //grab the validation message
    //add error classto the input
    //display error message
    //disable button
    //if all inputs are valid
    //enable button
    //reset error messages
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
