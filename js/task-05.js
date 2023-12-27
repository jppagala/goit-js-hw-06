const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", checkInputValue);

function checkInputValue() {
  const inputText = inputField.value;
  if (inputText === "") {
    outputField.textContent = "Anonymous";
  } else {
    outputField.textContent = inputText;
  }
}
