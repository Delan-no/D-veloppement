'use strict';

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById("canvas");
    let dimention = canvas.getContext("2d");


      // On créer un nouvel Objet du DOM avec JS.
      let myImg = new Image();
      // On définie la source de cette image
      myImg.src = 'Dublin_BikesXS.jpg';
  
      // Quand l'image est chargée par le navigateur on la place dans le Canvas
      myImg.onload = function () {
          //On place l'image
          myImg.src = 'Dublin_BikesXS.jpg'
          dimention.drawImage(myImg, 10, 10);
      };
/**
      let img = new Image();
      img.src = 'Dublin_BikesXS.jpg';

      img.addEventLister("load", function () {
    //On place l'image
      img.src = 'Dublin_BikesXS.jpg'
      dimention.drawImage(img, 10, 10);
      }); 
*/
      
});