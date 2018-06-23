//Quando passar o rato em cada foto
//som ou frase de cada um
//pop up com caracteristicas?

var roll = document.querySelectorAll("img");

//var text = document.querySelectorAll("button");

// function image(){
//   document.querySelectorAll("h2").style.color="red";
    
// }

// for (var i=0; i<roll.length; i++){
//     roll[i].addEventListener("click", function (){
//         var idImg = this.id // get the id of the image
//         document.getElementById("audio" + idImg).play()
     
       
//     })
    
// }
//var flip =document.querySelector('.flip')
var flip = document.querySelectorAll("img");

//document.querySelector('.flip').addEventListener('click', guessWho);

for (var i = 0; i<flip.length; i++){
    flip[i].addEventListener('click', guessWho);
}

function guessWho(){
    document.querySelector('.image-1-panel').classList.toggle('notactive');
    document.querySelector('.image-1-panel').classList.toggle('active');
     document.querySelector('.image-2-panel').classList.toggle('active');
    document.querySelector('.image-2-panel').classList.toggle('notactive');
    document.querySelector('.image-3-panel').classList.toggle('notactive');
    document.querySelector('.image-3-panel').classList.toggle('active');
     document.querySelector('.image-4-panel').classList.toggle('active');
    document.querySelector('.image-4-panel').classList.toggle('notactive');
    document.querySelector('.image-5-panel').classList.toggle('notactive');
    document.querySelector('.image-5-panel').classList.toggle('active');
     document.querySelector('.image-6-panel').classList.toggle('active');
    document.querySelector('.image-6-panel').classList.toggle('notactive');
    document.querySelector('.image-7-panel').classList.toggle('notactive');
    document.querySelector('.image-7-panel').classList.toggle('active');
     document.querySelector('.image-8-panel').classList.toggle('active');
    document.querySelector('.image-8-panel').classList.toggle('notactive');

}
        







// document.querySelector('#div').addEventListener('click', classToggle);

// function classToggle() {
//     this.classList.toggle('class1');
//     this.classList.toggle('class2');
// }