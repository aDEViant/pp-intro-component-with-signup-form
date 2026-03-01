// IDs
const backgroundImage = document.querySelector("#backgroundImage");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Classes
const mainLeftBox = document.querySelector(".main-left-box");
const mainLeftBoxHeading = document.querySelector(".main-left-box-heading");
const mainLeftBoxDescription = document.querySelector(
  ".main-left-box-description",
);
const mainRightBox = document.querySelector(".main-right-box");
const freeBanner = document.querySelector(".free-banner");
const freeBannerTextBold = document.querySelector(".free-banner-text-bold");
const formContainer = document.querySelector(".form-container");
const formGroups = document.querySelectorAll(".form-group"); // returns NodeList of all 5
const claimButton = document.querySelector(".claim-button");
const agreement = document.querySelector(".agreement");
const termsAndServices = document.querySelector(".terms-and-services");

// Elements (no id/class)
const form = document.querySelector("form");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Labels (targeted by their 'for' attribute)
const firstNameLabel = document.querySelector('label[for="firstName"]');
const lastNameLabel = document.querySelector('label[for="lastName"]');
const emailLabel = document.querySelector('label[for="email"]');
const passwordLabel = document.querySelector('label[for="password"]');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function getFirstName() {
  firstName.addEventListener("input", () => {
    if (firstName.value === "") {
      firstName.style.border = "2px solid red";
      firstNameErrorMessage.textContent = "First Name cannot be empty";
      firstNameErrorMessage.style.color = "red";
      firstName.style.backgroundImage = "url(/assets/icon-error.png)";
      firstName.style.backgroundRepeat = "no-repeat";
      firstName.style.backgroundPositionX = "23rem";
      firstName.style.backgroundPositionY = "0.4rem";
      firstName.style.backgroundSize = "1.5rem";
    }
  });
}

function getLastName() {
  lastName.addEventListener("input", () => {
    if (lastName.value === "") {
      lastName.style.border = "2px solid red";
      lastNameErrorMessage.textContent = "Last Name cannot be empty";
      lastNameErrorMessage.style.color = "red";
      lastName.style.backgroundImage = "url(/assets/icon-error.png)";
      lastName.style.backgroundRepeat = "no-repeat";
      lastName.style.backgroundPositionX = "23rem";
      lastName.style.backgroundPositionY = "0.4rem";
      lastName.style.backgroundSize = "1.5rem";
    }
  });
}

function getEmail() {
  email.addEventListener("input", () => {
    if (!emailRegex.test(email.value)) {
      email.style.border = "2px solid red";
      emailErrorMessage.textContent = "Looks like this is not an email";
      emailErrorMessage.style.color = "red";
      email.style.backgroundImage = "url(/assets/icon-error.png)";
      email.style.backgroundRepeat = "no-repeat";
      email.style.backgroundPositionX = "23rem";
      email.style.backgroundPositionY = "0.4rem";
      email.style.backgroundSize = "1.5rem";
    }
  });
}

function getPassword() {
  password.addEventListener("input", () => {
    if (password.value === "") {
      password.style.border = "2px solid red";
      passwordErrorMessage.textContent = "Password cannot be empty";
      passwordErrorMessage.style.color = "red";
      password.style.backgroundImage = "url(/assets/icon-error.png)";
      password.style.backgroundRepeat = "no-repeat";
      password.style.backgroundPositionX = "23rem";
      password.style.backgroundPositionY = "0.4rem";
      password.style.backgroundSize = "1.5rem";
    }
  });
}

function getUserData() {
  getFirstName();
  getLastName();
  getEmail();
  getPassword();
}

claimButton.addEventListener("click", () => {
    if(!getUserData){
        alert("Something went wrong. Please Try Again.");
    } else{
        alert("Form sent successfully!");
    }
});
