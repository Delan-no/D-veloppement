'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded',function(){
    let canvas = document.querySelector("#canvas")
    console.log(canvas);
    let text = canvas.getContext("2d");

    text.font = "bold 18px Verdana";

    text.fillStyle = "blue"
    text.fillText("Hello", 10, 50);

    text.fillStyle = "red";
    text.fillText("World ", 15+text.measureText("Hello").width, 50);

    text.fillStyle = "green";
    text.fillText("😋 !", text.measureText("Hello World  ").width, 50);
});