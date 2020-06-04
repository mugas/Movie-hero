const cards = document.querySelectorAll(".cards__single");
const images = document.querySelectorAll(".cards__image");
const cardsBack = document.querySelectorAll(".cards__back");

// console.log(cards);
// console.log(cardsBack);
/* const showText = () => {
  console.log("hello");
  // images.classList.add("cards__opacity");
  cards.classList.toggle("flipped");
}; */

const showBackCard = () => {
  const test = cards.classList.add(test);
  console.log("hello");
  console.log(cardsBack);
  console.log(images);
  console.log(cards.classList);

  // cardsBack.classList.add("cards__show");
  // show text from classlist cardsback
  // this.card.classList.add("cards__show");
};

cards.forEach((card) => {
  card.addEventListener("click", showBackCard);
});
/* cards.forEach((card) => {
  card.addEventListener("click", showText);
}); */

// cards.addEventListener("click", showText);
/* images.forEach((image) => {
  image.addEventListener("click", showText);
}); */
