const inputField = document.querySelector("#validation-input");
const dataLength = inputField.getAttribute("data-length");

inputField.addEventListener("blur", checkTextContent);

function checkTextContent() {
  const textLength = inputField.value.length;

  if (textLength === 0) {
    inputField.removeAttribute("class");
  }

  if (textLength === 6) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  }

  if (textLength != 6 && textLength != 0) {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
}
