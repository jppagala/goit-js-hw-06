function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var generatedColor = "";
const bodyObject = document.querySelector("body");
const colorText = document.querySelector("span.color");
const changeButton = document.querySelector("button.change-color");

changeButton.addEventListener("click", changeBgColor);

function changeBgColor() {
  generatedColor = getRandomHexColor();

  colorText.textContent = generatedColor;
  bodyObject.style.backgroundColor = generatedColor;
}
