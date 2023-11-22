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

    if (!isValid) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");

        const errorText = document.createElement("p");
        errorText.textContent = `Une erreur a été faite sur le champ ${nameLabel.textContent}, veuillez entrer 2 caractères ou plus.`;
        errorText.classList.add("error-message");
        nameField.classList.add("error-input");
        errorContainer.appendChild(errorText);
        nameDiv.insertAdjacentElement("beforeend", errorContainer);
    }

    return isValid;
}

//Checks if the email is valid

const emailField = document.getElementById("email-input");
const emailRegex =
    /^[a-zA-Z0-9!&'.*+=?^_`\/-]{1,64}@[a-zA-Z0-9.-]{1,64}\.[a-z]{2,10}$/;
const emailDiv = document.getElementById("email-div");

const validateEmail = () => {
    if (emailRegex.test(emailField.value)) {
        return true;
    } else {
        const newTextEmail = document.createElement("p");
        newTextEmail.textContent = `Veuillez entrer une adresse email valide.`;
        newTextEmail.classList.add("error-message");
        emailField.classList.add("error-input");
        emailDiv.insertAdjacentElement("beforeend", newTextEmail);
        return false;
    }
};

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

    if (radioSelected) {
        return true;
    } else {
        const newTextRadio = document.createElement("p");
        newTextRadio.textContent =
            "Une erreur a été faite sur le champ location, Vous devez choisir une option..";
        newTextRadio.classList.add("error-message");
        radioDiv.insertAdjacentElement("beforeend", newTextRadio);
        return false;
    }
};

//Checks if a birthdate has been selected

const birthdateField = document.getElementById("birthdate-input");
const birthdateDiv = document.getElementById("birthdate-div");

const validateBirthDate = () => {
    const birthdate = birthdateField.value;
    if (birthdate) {
        return true;
    } else {
        const newTextBirthdate = document.createElement("p");
        newTextBirthdate.textContent =
            "Veuillez entrer votre date de naissance.";
        newTextBirthdate.classList.add("error-message");
        birthdateField.classList.add("error-input");
        birthdateDiv.insertAdjacentElement("beforeend", newTextBirthdate);
        return false;
    }
};

//Checks if the number of tournament of the user is between 0 and 99

const tnNumberField = document.getElementById("quantity-input");
const tnNumberDiv = document.getElementById("quantity-div");

const validateTnNumber = () => {
    const tnNumber = parseFloat(tnNumberField.value);
    if (0 < tnNumber && tnNumber <= 99) {
        return true;
    } else {
        const newTextTnNumber = document.createElement("p");
        newTextTnNumber.textContent =
            "Veuillez entrer le nombre de tournois auxquels vous avez participé.";
        newTextTnNumber.classList.add("error-message");
        tnNumberField.classList.add("error-input");
        tnNumberDiv.insertAdjacentElement("beforeend", newTextTnNumber);
        return false;
    }
};

//Checks if the TOS have been accepted by the user
const TOSCheckbox = document.getElementById("checkbox1");
const checkboxLabel = document.getElementById("checkbox1-label");

const validateTOS = () => {
    if (TOSCheckbox.checked) {
        return true;
    } else {
        const newTextTOS = document.createElement("p");
        newTextTOS.textContent =
            "Veuillez accepter les conditions d'utilisation.";
        newTextTOS.classList.add("error-message");
        checkboxLabel.insertAdjacentElement("afterend", newTextTOS);
        return false;
    }
};

//Puts a listener for the click even on the form button, main function calls all the validate functions and displays the correct window.
reserveForm.addEventListener("submit", (event) => {
    removeErrorMessages();
    event.preventDefault();

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
        !isFirstNameValid ||
        !isLastNameValid ||
        !isEmailValid ||
        !isRadioValid ||
        !isBirthDateValid ||
        !isTnNumberValid ||
        !isTOSValid
    ) {
        alert(
            "Veuillez corriger les erreurs dans le formulaire avant de soumettre."
        );
    } else {
        reserveForm.reset();
        launchModal(confirmModal);
    }
});

//Closing the confirmation modal
const confirmModal = document.querySelector("#confirmation-modal");
const confirmClose = document.querySelectorAll(".confirmation-close-btn");

confirmClose.forEach((btn) =>
    btn.addEventListener("click", () => {
        closeModal(confirmModal);
        closeModal(signupModal);
    })
);
