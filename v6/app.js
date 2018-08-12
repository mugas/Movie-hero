
//Sound on click
var roll = document.querySelectorAll("img");

for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click", function (){
        var idImg = this.id // get the id of the image
        document.getElementById("audio" + idImg).play();
       
    });
}
    

//Image on click

document.querySelector('.first-panel').addEventListener('click', batman);
document.querySelector('.second-panel').addEventListener('click', bane,);

document.querySelector('.third-panel').addEventListener('click', joker);
document.querySelector('.forth-panel').addEventListener('click', alfred);


function batman(){
   
        document.querySelector('.image-1-panel').classList.toggle('notactive');
        document.querySelector('.image-2-panel').classList.toggle('notactive');
        document.querySelector('.background').classList.toggle('batman-background');
        var text = document.getElementById("heroes");
        if(text.innerHTML === "Heroes are back  "){
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
} 

}


function joker(){
    document.querySelector('.image-5-panel').classList.toggle('notactive');
    document.querySelector('.image-6-panel').classList.toggle('notactive');
    document.querySelector('.background').classList.toggle('joker-background');
    var text = document.getElementById("heroes");
    if(text.innerHTML !== "Joker" && img.src !=="flash.svg"){
        text.innerHTML = "Joker"; 
         img.src = "flash.svg";
    } else {
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







