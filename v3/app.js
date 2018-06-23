//Quando passar o rato em cada foto
//som ou frase de cada um
//pop up com caracteristicas?
var roll = document.querySelectorAll("img");
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

//toggle open close javascript

for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click",function(){
        var idImg = this.id // get the id of the image
        document.getElementById("audio" + idImg).play(); 

    });
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));







                    