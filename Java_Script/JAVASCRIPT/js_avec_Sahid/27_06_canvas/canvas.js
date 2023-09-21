
'use strict';

document.addEventListener("DOMContentLoaded", function(){
    /**
     * L'objet du DOM canvas
     */
    let canvas = document.getElementById("canvas");
    // console.log(canvas);
    /**
     * 
     * le context utilisé avec Canvas qui donne accès aux librairies de manipulation
     */
    let context = canvas.getContext("2d"); // webGL 

    /**
     * On dit au context que la couleur de contour (strocke) est rouge
     */
    context.strokeStyle = "#FF00DD"; // La couleur

    /**
     * on trace le contour (stroke) d'un rectangle
     */
    //context.strokeRect(210, 340, 50, 10); // strokeRect(px, py, width, heith);

    context.fillStyle = "green"; // fillStyle : definit la couleur de remplissage

    context.fillRect(10, 10, 50, 20); // fillRect : délimite la zone de remplissage
    context.fillRect(70, 10, 50, 20);
    context.fillRect(130, 10, 50, 20);
    context.fillRect(190, 10, 50, 20);
    context.fillRect(250, 10, 50, 20);
    context.fillRect(310, 10, 50, 20);
    context.fillRect(370, 10, 50, 20);  
    context.fillRect(430, 10, 50, 20); 
    
    context.fillRect(10, 40, 50, 20);
    context.fillRect(70, 40, 50, 20);
    context.fillRect(130, 40, 50, 20);
    context.fillRect(190, 40, 50, 20);
    context.fillRect(250, 40, 50, 20);
    context.fillRect(310, 40, 50, 20);
    context.fillRect(370, 40, 50, 20);  
    context.fillRect(430, 40, 50, 20); 
    
    context.fillRect(10, 70, 50, 20);
    context.fillRect(70, 70, 50, 20);
    context.fillRect(130, 70, 50, 20);
    context.fillRect(190, 70, 50, 20);
    context.fillRect(250, 70, 50, 20);
    context.fillRect(310, 70, 50, 20);
    context.fillRect(370, 70, 50, 20);  
    context.fillRect(430, 70, 50, 20); 

    context.fillRect(10, 100, 50, 20);
    context.fillRect(70, 100, 50, 20);
    context.fillRect(130, 100, 50, 20);
    context.fillRect(190, 100, 50, 20);
    context.fillRect(250, 100, 50, 20);
    context.fillRect(310, 100, 50, 20);
    context.fillRect(370, 100, 50, 20);  
    context.fillRect(430, 100, 50, 20); 

    context.font = "bold 18px Verdana"; //on definit la police de caractère pour tous les textes 
  /**   
    context.fillStyle = "#d125e6"; // couleur pour écrire du Texte
    context.fillText("hello", 100 , 180);
    context.fillStyle = "blue";
    context.fillText("world", 100+context.measureText("hello ").width, 180)
    context.fillText("Bienvenu sur le jeu de casse brique", 50, 250);
    context.strokeText("Bienvenu sur le jeu de casse brique ▶▶", 50, 290);
*/
/*
    //on crée un nouvel objet du DOM ave JS.
    let myImg = new Image();

   //on definit la source de la l'image
    myImg.src = "./Dublin_BikesXS.jpg";

   // Quand l'image est chargée par le navigateur on la place dans le Canves 
   myImg.onload = function(){
    context.drawImage(myImg, 10, 10)
   }
*/
})

  //Ici on définit la proprété de notre carré que l'on va dessiner dans un objet square
    let square = {
      color: "#ff0000",
      length: 20,
      x:10,
      y:10
    }
    //Ici notre context et notre Canvas sont définis dans le Scope global pour un accès par non fonctions
    let canvasDom;
    let ctx;
    //Dès que le DOM est chargé on commence
    document.addEventListener("DOMContentLoaded", function(){
    // L'objet du DOM Canvas
    canvasDom = document.getElementById("canva");
    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    ctx = canvasDom.getContext("2d");
    // On desine notre carré la première fois
    displaySquare();
    //Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier
    document.addEventListener("keydown", moveSquare);
    });

    /**Gestionnaire dévènement clacier
     * @param {*} e l'évènement keydow
     */
   function moveSquare(e){
    // On détecte la touche et la direction puis on change les coordonnées
    switch (e.key) {
      case 'ArrowRight':
            if (square.x + square.length < canvasDom.width ) square.x++;
            break;
        case 'ArrowLeft':
            if (square.x > 0) square.x--;
            break;
        case 'ArrowUp':
            if (square.y > 0) square.y--;
            break;
        case 'ArrowDown':
            if (square.y + square.length < canvasDom.height) square.y++;
            break;
    }

       // On dessine notre carré 
       displaySquare();
   }

   
/** Fonction qui affiche le carré avec ces coordonnées et la couleur défini dans le contexte
 * 
 */
function displaySquare()
{
	// On vide le Canvas avant de redessiner
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est yellow
    ctx.fillStyle = 'yellow';
    // On rempli le Canvas de gris
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle = square.color;

    // On trace un nouveau carré rempli (fill) avec cette couleur
    ctx.fillRect(square.x, square.y, square.length, square.length)
  }