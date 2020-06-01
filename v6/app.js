/* //Sound on click
var roll = document.querySelectorAll("img");

for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click", function (){
        var idImg = this.id // get the id of the image
        document.getElementById("audio" + idImg).play();
       
    });
}
    

//Code for every Image on click

document.querySelector('.first-panel').addEventListener('click', batman);
document.querySelector('.second-panel').addEventListener('click', bane,);

document.querySelector('.third-panel').addEventListener('click', joker);
document.querySelector('.forth-panel').addEventListener('click', alfred);


function batman(){
   
        document.querySelector('.image-1-panel').classList.toggle('notactive');
        document.querySelector('.image-2-panel').classList.toggle('notactive');
        document.querySelector('.background').classList.toggle('batman-background');
        var text = document.getElementById("heroes");
        if(text.innerHTML !== "Batman"){
            text.innerHTML="Batman";
    } else {
            text.innerHTML = "Heroes are back";
        }      
    }

function bane(){
    document.querySelector('.image-3-panel').classList.toggle('notactive');
    document.querySelector('.image-4-panel').classList.toggle('notactive');
    document.querySelector('.background').classList.toggle('bane-background');
    var text = document.getElementById("heroes");
    if(text.innerHTML !== "Bane"){
        text.innerHTML="Bane";
}  else {
    text.innerHTML = "Heroes are back";
}  

}


function joker(){
    document.querySelector('.image-5-panel').classList.toggle('notactive');
    document.querySelector('.image-6-panel').classList.toggle('notactive');
    document.querySelector('.background').classList.toggle('joker-background');
    var text = document.getElementById("heroes");
    if(text.innerHTML !== "Joker"){
        text.innerHTML="Joker";
}  else {
    text.innerHTML = "Heroes are back";
}  
}

function alfred(){
    document.querySelector('.image-7-panel').classList.toggle('notactive');
    document.querySelector('.image-8-panel').classList.toggle('notactive');
    document.querySelector('.background').classList.toggle('alfred-background');
    var text = document.getElementById("heroes");
    if(text.innerHTML !== "Alfred"){
        text.innerHTML = "Alfred";
    } else {
        text.innerHTML = "Heroes are back";
    }
   
}

//Set title back to "Heroes are back"
setInterval(function (){
    var titles = document.getElementById("heroes");
    if(titles.innerHTML !=="Heroes are back"){
        titles.innerHTML ="Heroes are back";
    }
    
},3000); */

const cards = document.querySelectorAll(".cards__single");
const images = document.querySelector(".cards__image");

console.log(cards);

const showText = () => {
  console.log("hello");
  images.classList.add("cards__opacity");
};

cards.forEach((card) => {
  card.addEventListener("click", showText);
});

/* images.forEach((image) => {
  image.addEventListener("click", showText);
}); */
