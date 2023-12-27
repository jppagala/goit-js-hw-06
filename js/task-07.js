const slider = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");

function changeFontSize() {
  targetText.style.fontSize = `${slider.value}px`;
}

changeFontSize();
slider.addEventListener("input", changeFontSize);
