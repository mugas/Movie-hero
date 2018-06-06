//Quando passar o rato em cada foto
//som ou frase de cada um
//pop up com caracteristicas?

var image = document.getElementById("sound");
var audio = document.getElementById("batman");

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