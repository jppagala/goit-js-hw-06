const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log("");

for (const category of categories) {
  const categoryHeader = category.querySelectorAll("h2");
  const categoryHeaderName = categoryHeader[0].innerText;
  console.log(`Category: ${categoryHeaderName}`);

  const categoryElements = category.querySelectorAll("li");
  console.log(`Elements: ${categoryElements.length}`);
  console.log("");
}
