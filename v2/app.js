//Quando passar o rato em cada foto
//som ou frase de cada um
//pop up com caracteristicas?
var roll = document.querySelectorAll("img");
var image = document.getElementById("sound");
var audio = document.getElementById("batman");
// var batman = new Audio();
// batman.src = "sounds/batman.wav";

for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("mouseover",function(){
        var idImg = this.id
        document.getElementById("audio" + idImg).play();
    });
}



/*

---------------
works but its a function for every image
image.onmouseover = function() {
    audio.play()
}

var image1 = document.getElementById("sound1");
var audio1 = document.getElementById("bane");

image1.onmouseover = function(){
    audio1.play()
    
}

var image2 = document.getElementById("sound2");
var audio2 = document.getElementById("joker");

image2.onmouseover = function(){
    audio2.play();
}

var image3 = document.getElementById("sound3");
var audio3 = document.getElementById("alfred");

image3.onmouseover = function(){
    audio3.play();
}
*/