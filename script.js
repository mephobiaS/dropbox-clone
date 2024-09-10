//billing section radio buttons

const radio1 = document.getElementById("option1");
const radio2 = document.getElementById("option2");

let card1 = document.getElementById("card1bill");
let card2 = document.getElementById("card2bill");
let card3 = document.getElementById("card3bill");

radio1.addEventListener("change", function () {
  if (this.checked) {
    card1.innerHTML = "$19.99 / month";
    card2.innerHTML = "$18 / user / month";
    card3.innerHTML = "$30 / user / month";
  }
});

radio2.addEventListener("change", function () {
  if (this.checked) {
    card1.innerHTML = "$16.58 / month";
    card2.innerHTML = "$15 / user / month";
    card3.innerHTML = "$24 / user / month";
  }
});

/**carousel js */
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

// Updatingg total slides
document.getElementById("total-slides").textContent = totalItems
  .toString()
  .padStart(2, "0");

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });

  // Updating current slide number in slider
  document.getElementById("slide-number").textContent = (index + 1)
    .toString()
    .padStart(2, "0");
}

function next() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

//  first slide initialization
showItem(currentIndex);
