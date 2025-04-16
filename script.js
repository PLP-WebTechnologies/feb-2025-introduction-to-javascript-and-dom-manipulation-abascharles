// Change text content dynamically
const textPara = document.getElementById("dynamic-text");
const changeTextBtn = document.getElementById("change-text-btn");

changeTextBtn.addEventListener("click", () => {
  textPara.textContent = "🎉 The text has been changed dynamically!";
});

// Modify CSS styles via JavaScript
const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");

changeColorBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = getRandomColor();
});

// Add or remove an element when a button is clicked
const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item-btn");

addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", () => {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});

// Utility function to get a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
