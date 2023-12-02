//Checks if the first and last name are atleast 2 characters long

const firstNameField = document.getElementById("first-input");
const firstNameDiv = document.getElementById("first-div");
const firstNameLabel = document.getElementById("first-label");

const lastNameField = document.getElementById("last-input");
const lastNameDiv = document.getElementById("last-div");
const lastNameLabel = document.getElementById("last-label");

function validateName(nameField, nameDiv, nameLabel) {
    const nameRegex = /[a-zA-Z\s]{2,}/g;
    const isValid = nameRegex.test(nameField.value);

    if (!isValid && !nameDiv.querySelector("div")) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");

        const errorText = document.createElement("p");
        errorText.textContent = `Une erreur a été faite sur le champ ${nameLabel.textContent}, veuillez entrer 2 caractères ou plus.`;
        errorText.classList.add("error-message");
        nameField.classList.add("error-input");
        errorContainer.appendChild(errorText);
        nameDiv.insertAdjacentElement("beforeend", errorContainer);
    } else if (!isValid && nameDiv.querySelector("div")) {
    } else {
        removeIndividualError(nameDiv);
        removeIndividualBorder(nameDiv);
    }

    return isValid;
}

//Checks if the email is valid

const emailField = document.getElementById("email-input");
const emailRegex =
    /^[a-zA-Z0-9!&'.*+=?^_`\/-]{1,64}@[a-zA-Z0-9.-]{1,64}\.[a-z]{2,10}$/;
const emailDiv = document.getElementById("email-div");

function validateEmail() {
    if (!emailRegex.test(emailField.value) && !emailDiv.querySelector("div")) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorTextEmail = document.createElement("p");
        errorTextEmail.textContent = `Veuillez entrer une adresse email valide.`;
        errorTextEmail.classList.add("error-message");
        emailField.classList.add("error-input");
        errorContainer.appendChild(errorTextEmail);
        emailDiv.insertAdjacentElement("beforeend", errorContainer);
        return false;
    } else if (
        !emailRegex.test(emailField.value) &&
        emailDiv.querySelector("div")
    ) {
        return false;
    } else {
        removeIndividualError(emailDiv);
        removeIndividualBorder(emailDiv);
        return true;
    }
}

//Checks if one radio button is selected

const radioButtons = document.getElementsByName("location");
const radioDiv = document.getElementById("radio-div");

const validateRadio = () => {
    let radioSelected = false;
    radioButtons.forEach((element) => {
        if (element.checked) {
            radioSelected = true;
        }
    });

    if (!radioSelected && !radioDiv.querySelector("div")) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorTextRadio = document.createElement("p");
        errorTextRadio.textContent =
            "Une erreur a été faite sur le champ location, Vous devez choisir une option.";
        errorTextRadio.classList.add("error-message");
        errorContainer.appendChild(errorTextRadio);
        radioDiv.insertAdjacentElement("beforeend", errorContainer);
        return false;
    } else if (!radioSelected && !radioDiv.querySelector("div")) {
        return false;
    } else {
        removeIndividualError(radioDiv);
        return true;
    }
};

//Checks if a birthdate has been selected

const birthdateField = document.getElementById("birthdate-input");
const birthdateDiv = document.getElementById("birthdate-div");

const validateBirthDate = () => {
    const birthdate = birthdateField.value;
    if (!birthdate && !birthdateDiv.querySelector("div")) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorTextBirthdate = document.createElement("p");
        errorTextBirthdate.textContent =
            "Veuillez entrer votre date de naissance.";
        errorTextBirthdate.classList.add("error-message");
        birthdateField.classList.add("error-input");
        errorContainer.appendChild(errorTextBirthdate);
        birthdateDiv.insertAdjacentElement("beforeend", errorContainer);
        return false;
    } else if (!birthdate && birthdateDiv.querySelector("div")) {
        return false;
    } else {
        removeIndividualBorder(birthdateDiv);
        removeIndividualError(birthdateDiv);
        return true;
    }
};

//Checks if the number of tournament of the user is between 0 and 99

const tnNumberField = document.getElementById("quantity-input");
const tnNumberDiv = document.getElementById("quantity-div");

const validateTnNumber = () => {
    const tnNumber = parseFloat(tnNumberField.value);
    if (
        !(0 < tnNumber && tnNumber <= 99) &&
        !tnNumberDiv.querySelector("div")
    ) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorTextTnNumber = document.createElement("p");
        errorTextTnNumber.textContent =
            "Veuillez entrer le nombre de tournois auxquels vous avez participé.";
        errorTextTnNumber.classList.add("error-message");
        tnNumberField.classList.add("error-input");
        errorContainer.appendChild(errorTextTnNumber);
        tnNumberDiv.insertAdjacentElement("beforeend", errorContainer);
        return false;
    } else if (
        !(0 < tnNumber && tnNumber <= 99) &&
        tnNumberDiv.querySelector("div")
    ) {
        return false;
    } else {
        removeIndividualError(tnNumberDiv);
        removeIndividualBorder(tnNumberDiv);
        return true;
    }
};

//Checks if the TOS have been accepted by the user
const TOSCheckbox = document.getElementById("checkbox1");
const checkboxLabel = document.getElementById("checkbox1-label");
const checkboxDiv = document.getElementById("checkbox-div");

const validateTOS = () => {
    if (!TOSCheckbox.checked && !checkboxDiv.querySelector("div")) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorTextTOS = document.createElement("p");
        errorTextTOS.textContent =
            "Veuillez accepter les conditions d'utilisation.";
        errorTextTOS.classList.add("error-message");
        errorContainer.appendChild(errorTextTOS);
        checkboxLabel.insertAdjacentElement("afterend", errorContainer);
        return false;
    } else if (!TOSCheckbox.checked && checkboxDiv.querySelector("div")) {
        return false;
    } else {
        removeIndividualError(checkboxDiv);
        return true;
    }
};

//Validates the form in its entirety

const validateForm = () => {
    const isFirstNameValid = validateName(
        firstNameField,
        firstNameDiv,
        firstNameLabel
    );
    const isLastNameValid = validateName(
        lastNameField,
        lastNameDiv,
        lastNameLabel
    );
    const isEmailValid = validateEmail();
    const isRadioValid = validateRadio();
    const isBirthDateValid = validateBirthDate();
    const isTnNumberValid = validateTnNumber();
    const isTOSValid = validateTOS();

    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isRadioValid &&
        isBirthDateValid &&
        isTnNumberValid &&
        isTOSValid
    ) {
        reserveForm.reset();
        deleteInputListener(
            firstNameField,
            () => validateName(firstNameField, firstNameDiv, firstNameLabel),
            "input"
        );
        deleteInputListener(
            lastNameField,
            () => validateName(lastNameField, lastNameDiv, lastNameLabel),
            "input"
        );
        deleteInputListener(emailField, () => validateEmail(), "input");
        deleteInputListener(birthdateField, () => validateBirthDate(), "input");
        deleteInputListener(tnNumberField, () => validateTnNumber(), "change");
        deleteInputListener(TOSCheckbox, () => validateTOS(), "input");
        radioButtons.forEach((radioButton) =>
            createInputListener(radioButton, () => validateRadio(), "change")
        );
        launchModal(confirmModal);
    }
};

//When the form is submitted create the change listener for the user input then validates or not the whole form

reserveForm.addEventListener("submit", (event) => {
    removeErrorMessages();
    event.preventDefault();
    //Attaching all functions to their inputs
    createInputListener(
        firstNameField,
        () => validateName(firstNameField, firstNameDiv, firstNameLabel),
        "input"
    );
    createInputListener(
        lastNameField,
        () => validateName(lastNameField, lastNameDiv, lastNameLabel),
        "input"
    );
    createInputListener(emailField, () => validateEmail(), "input");
    createInputListener(birthdateField, () => validateBirthDate(), "input");
    createInputListener(tnNumberField, () => validateTnNumber(), "change");
    createInputListener(TOSCheckbox, () => validateTOS(), "input");
    radioButtons.forEach((radioButton) =>
        createInputListener(radioButton, () => validateRadio(), "change")
    );
    //Validating form to send infos if valid
    validateForm();
});

//Clear the event listener then assigns one to the given input with its function
const createInputListener = (input, validationFunction, eventType) => {
    deleteInputListener(input, validationFunction, eventType);
    input.addEventListener(eventType, (event) => {
        validationFunction();
    });
};

const deleteInputListener = (input, validationFunction, eventType) => {
    input.removeEventListener(eventType, (event) => {
        validationFunction();
    });
};
//Closing the confirmation modal
const confirmModal = document.querySelector("#confirmation-modal");
const confirmClose = document.querySelectorAll(".confirmation-close-btn");

confirmClose.forEach((btn) =>
    btn.addEventListener("click", () => {
        closeModal(confirmModal);
        closeModal(signupModal);
    })
);
