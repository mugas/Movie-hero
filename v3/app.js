//Quando passar o rato em cada foto
//som ou frase de cada um
//pop up com caracteristicas?
var roll = document.querySelectorAll("img");
const panels = document.querySelectorAll('.panel');



for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click",function(){
        var idImg = this.id // get the id of the image
        document.getElementById("audio" + idImg).play();                                                            
    });
}





                    