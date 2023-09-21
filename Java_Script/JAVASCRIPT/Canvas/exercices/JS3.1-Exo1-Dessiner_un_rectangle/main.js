'use strict';

document.addEventListener('DOMContentLoaded',function(){

    const canvas = document.getElementById("canvas");
     
    let rect = canvas.getContext("2d");

    /**
     * 1er rectangle sans remplissage avec un contour noir
     */
    rect.strokeStyle = "#000";
    rect.strokeRect(30, 30, 200, 120);
     /**
     * 2er rectangle sans remplissage avec un contour vert
     */
    rect.strokeStyle = "green";
    rect.strokeRect(30, 170, 200, 120)
     /**
     * 3er rectangle plein avec remplissage rouge
     */
    rect. fillStyle = "red";
    rect.fillRect(30, 320, 200, 120);
    
   
});