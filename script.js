const backgroundImage = document.querySelector("#backgroundImage");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const firstNameErrorMessage = document.querySelector("#firstNameErrorMessage");
const lastNameErrorMessage = document.querySelector("#lastNameErrorMessage");
const emailErrorMessage = document.querySelector("#emailErrorMessage");
const passwordErrorMessage = document.querySelector("#passwordErrorMessage");
const claimButton = document.querySelector(".claim-button");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateFirstName() {
  if (firstName.value.trim() === "") {
    firstName.classList.add("error");
    firstNameErrorMessage.textContent = "First Name cannot be empty";
    firstNameErrorMessage.style.color = "red";
    return false;
  } else {
    firstName.classList.remove("error");
    firstNameErrorMessage.textContent = "";
    return true;
  }
}

function validateLastName() {
  if (lastName.value.trim() === "") {
    lastName.classList.add("error");
    lastNameErrorMessage.textContent = "Last Name cannot be empty";
    lastNameErrorMessage.style.color = "red";
    return false;
  } else {
    lastName.classList.remove("error");
    lastNameErrorMessage.textContent = "";
    return true;
  }
}

function validateEmail() {
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add("error");
    emailErrorMessage.textContent = "Looks like this is not an email";
    emailErrorMessage.style.color = "red";
    return false;
  } else {
    email.classList.remove("error");
    emailErrorMessage.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (password.value.trim() === "") {
    password.classList.add("error");
    passwordErrorMessage.textContent = "Password cannot be empty";
    passwordErrorMessage.style.color = "red";
    return false;
  } else {
    password.classList.remove("error");
    passwordErrorMessage.textContent = "";
    return true;
  }
}

claimButton.addEventListener("click", () => {
  const isValidFirstName = validateFirstName();
  const isValidLastName = validateLastName();
  const isValidEmail = validateEmail();
  const isValidPassword = validatePassword();

  if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
    alert("Form Submitted Successfully!");
  }
});
