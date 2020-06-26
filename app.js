const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  // toggle the cards on click
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
