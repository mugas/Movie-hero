
//Sound on click
var roll = document.querySelectorAll("img");

for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click", function (){
        var idImg = this.id // get the id of the image
        document.getElementById("audio" + idImg).play();
    });
}
    



document.querySelector('.first-panel').addEventListener('click', batman);
document.querySelector('.second-panel').addEventListener('click', bane,);

document.querySelector('.third-panel').addEventListener('click', joker);
document.querySelector('.forth-panel').addEventListener('click', alfred);


function batman(){
        document.querySelector('.image-1-panel').classList.toggle('notactive');
        document.querySelector('.image-2-panel').classList.toggle('notactive');
        //document.body.style.background = "red";
        document.querySelector('.background').classList.toggle('bane-background');
        
        
    }

function bane(){
    document.querySelector('.image-3-panel').classList.toggle('notactive');
    document.querySelector('.image-4-panel').classList.toggle('notactive');
    document.body.style.background = "yellow";

}

function joker(){
    document.querySelector('.image-5-panel').classList.toggle('notactive');
    document.querySelector('.image-6-panel').classList.toggle('notactive');
}

function alfred(){
    document.querySelector('.image-7-panel').classList.toggle('notactive');
    document.querySelector('.image-8-panel').classList.toggle('notactive');
}







