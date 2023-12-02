function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const signupModal = document.querySelector("#signup-modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) =>
    btn.addEventListener("click", () => launchModal(signupModal))
);

// launch general modal form
function launchModal(modal) {
    modal.style.display = "block";
}

//close general modal form
function closeModal(modal) {
    modal.style.display = "none";
}

//Cleaning the DOM of error messages
const removeErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".error-message");
    const errorBorders = document.querySelectorAll(".error-input");
    const errorContainer = document.querySelectorAll(".error-container");
    errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
    });
    errorBorders.forEach((errorBorder) => {
        errorBorder.classList.remove("error-input");
    });
    errorContainer.forEach((errorContainer) => {
        errorContainer.remove();
    });
};

//Cleaning a single input of its error message

const removeIndividualError = (inputDiv) => {
    const errorMessage = inputDiv.querySelector(".error-container");
    if (errorMessage) {
        errorMessage.remove();
    }
};

//remove the border from an input element

const removeIndividualBorder = (inputDiv) => {
    const errorBorder = inputDiv.querySelector(".error-input");
    if (errorBorder) {
        errorBorder.classList.remove("error-input");
    }
};

//Closing the modal
const closeBtn = document.querySelector("#signup-close-btn");
const reserveForm = document.querySelector("form");
reserveForm.reset();
closeBtn.addEventListener("click", () => {
    removeErrorMessages();
    closeModal(signupModal);
    reserveForm.reset();
});
