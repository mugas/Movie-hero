const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
  this.classList.toggle("test");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
