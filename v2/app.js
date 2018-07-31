
var roll = document.querySelectorAll("img");
//var image = document.getElementById("sound");
//var audio = document.getElementById("batman");


for (var i=0; i<roll.length; i++){
    roll[i].addEventListener("click",function(){
        var idImg = this.id
        document.getElementById("audio" + idImg).play();
        document.getElementsByClassName("test")
    });
}



