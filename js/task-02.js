const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const temporaryUL = document.createElement("ul");

for (const ingredient of ingredients) {
  const temporaryElement = document.createElement("li");
  temporaryElement.innerText = ingredient;
  temporaryElement.classList.add("item");
  temporaryUL.append(temporaryElement);
}

document.getElementById("ingredients").innerHTML = temporaryUL.innerHTML;
