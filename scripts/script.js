document.addEventListener("DOMContentLoaded", () => {
  // create reference for input fields.
  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmInput = document.getElementById("password-confirm-input");

  // create reference for buttons.
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");

  // simple email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }
  function validateName(name) {
    return /^[A-Za-zก-๙]+$/.test(name.trim());
  }
  function validatePassword(pw) {
    return pw.length >= 6;
  }
  function validateConfirmPassword(pw, confirmPw) {
    return pw === confirmPw && validatePassword(confirmPw);
  }

  function showInvalid(input, message) {
    input.classList.add("is-invalid");
    input.nextElementSibling.textContent = message;
  }
  function showValid(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
  function clearValidation(input) {
    input.classList.remove("is-invalid", "is-valid");
  }

  // add callback function for firstNameInput.onkeyup event
  firstNameInput.onkeyup = () => {
    firstNameInput.classList.remove("is-valid");
    firstNameInput.classList.remove("is-invalid");
  };

  // add callback function for submit button.
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;

    // First name
    if (!validateName(firstNameInput.value)) {
      showInvalid(firstNameInput, "Invalid first name");
      valid = false;
    } else showValid(firstNameInput);

    // Last name
    if (!validateName(lastNameInput.value)) {
      showInvalid(lastNameInput, "Invalid last name");
      valid = false;
    } else showValid(lastNameInput);

    // Email
    if (!validateEmail(emailInput.value)) {
      showInvalid(emailInput, "Invalid email format");
      valid = false;
    } else showValid(emailInput);

    // Password
    if (!validatePassword(passwordInput.value)) {
      showInvalid(passwordInput, "Require at least 6 characters");
      valid = false;
    } else showValid(passwordInput);

    // Confirm Password
    if (!validateConfirmPassword(passwordInput.value, passwordConfirmInput.value)) {
      showInvalid(passwordConfirmInput, "Password mismatch or invalid password");
      valid = false;
    } else showValid(passwordConfirmInput);

    if (valid) {
      alert("Registered successfully");
    }
  });

  // add callback function for Reset button.
  resetBtn.addEventListener("click", () => {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    passwordConfirmInput.value = "";
    [firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(clearValidation);
  });
});
