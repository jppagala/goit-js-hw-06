function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputBox = document.querySelector("input[type='number']");
const boxContainer = document.querySelector("div#boxes");

createButton.addEventListener("click", validateInputNumber);
destroyButton.addEventListener("click", destroyBoxes);

function validateInputNumber() {
  const boxToCreate = inputBox.value;

  if (boxToCreate <= 100 && boxToCreate > 0) {
    createBoxes(boxToCreate);
  } else {
    alert(`Invalid Number: ${boxToCreate}\nNumber must be from 1 to 100 only!`);
  }
}

function createBoxes(amount) {
  var markup = "";
  var boxSize = 30;

  for (let i = 1; i <= amount; i++) {
    markup += `<div class='box' style='background-color:${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px;'></div>`;
    boxSize += 10;
  }
  boxContainer.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
