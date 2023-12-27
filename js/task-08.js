const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", validateInputFields);

function validateInputFields(event) {
  event.preventDefault();

  const form = event.target;

  const emailProperty = form.elements.email.name;
  const inputEmail = form.elements.email.value;
  const passwordProperty = form.elements.password.name;
  const inputPassword = form.elements.password.value;

  if (inputEmail === "" || inputPassword === "") {
    alert(`All fields must be filled in!`);
  }

  if (inputEmail != "" && inputPassword != "") {
    const formOutput = {
      [emailProperty]: inputEmail,
      [passwordProperty]: inputPassword,
    };

    console.log(formOutput);
    form.reset();
  }
}
