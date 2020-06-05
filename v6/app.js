const cards = document.querySelectorAll(".cards__single");
const images = document.querySelectorAll(".cards__image");
const cardsBack = document.querySelectorAll(".cards__back");
const cardsFront = document.querySelectorAll(".cards__front");

/* cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(cards.classList);
    if (card.classList.contains("test")) {
      card.classList.remove("test");
    } else {
      card.classList.add("test");
    }
  });
}); */

function flipCard() {
  this.classList.toggle("test");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
