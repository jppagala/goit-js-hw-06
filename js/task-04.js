let counterValue = 0;
const counter = document.querySelector("#value");
counterValue = Number(counter.innerText);

const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
decrementButton.addEventListener("click", () => {
  counterValue--;
  counter.innerText = counterValue;
});

const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
incrementButton.addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
});
