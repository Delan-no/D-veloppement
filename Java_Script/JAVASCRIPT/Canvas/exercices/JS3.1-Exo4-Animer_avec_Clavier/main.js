'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length: 20,
    x: 10,
    y: 10
};
let circle ={
    radius : 10,
    x : 10,
    y : 10,
    length : 20
}

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;
let canvas;
let ctc;
// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    // square
    canvasDom = document.getElementById("canvas");
    ctx = canvasDom.getContext("2d");
    document.addEventListener('keydown', move);
    carre();

    // circle
    canvas = document.getElementById("canva");
    ctc = canvas.getContext("2d");
    cercle();
    document.addEventListener("keydown", mouvement)
    
});


function carre() {
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height)
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    // ctx.clearRect(square.x, square.y, square.length, square.length);
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.length, square.length);
}


function move(e) {
    switch (e.key) {
        case "ArrowRight":
            if (square.x + square.length < 200) square.x++;
            break;
        case "ArrowLeft":
            if (square.x > 0) square.x--;
            break;
        case "ArrowUp":
            if (square.y > 0) square.y--;
            break;
        case "ArrowDown":
            if (square.y + square.length < 200) square.y++;
            break;   
    }
    carre()
}

// canvas pour le cercle
function cercle() {
    ctc.clearRect(0, 0, canvas.width, canvas.height)
    ctc.fillStyle = "#dddddd";
    ctc.fillRect(0, 0, canvas.width, canvas.height);
    
    ctc.fillStyle = "#FF0002";
    ctc.beginPath();
    ctc.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctc.fill()
}

// mouvement du cercle
function mouvement(event){
    switch (event.key) {
        case "ArrowRight":
           if(circle.x + circle.length < 200)circle.x++;
            break;
        case "ArrowLeft":
           if(circle.x > 10) circle.x--;
            break;
        case "ArrowUp":
           if(circle.y  > 10) circle.y--;
            break;
        case "ArrowDown":
           if(circle.y + circle.length < 200)circle.y++;
            break;   
    }
    cercle()
}



