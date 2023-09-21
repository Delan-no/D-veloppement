'use strict'
document.addEventListener("DOMContentLoaded", function(){
    const ball1 = document.querySelector("#ball1");
    const ball2 = document.querySelector("#ball2");
    const ball3 = document.querySelector("#ball3");
    
    let position = {
        ball1: 0,
        ball2: 0,
        ball3: 0,
        ball4: 0
    };
    let stop = 1

    const updateSpeed = 1000/ 60;
    // largeur du navigateur
    const windowWidth = window.innerWidth;



    moveWidthSetTimeout()
    function moveWidthSetTimeout(){
        position.ball1++;
        // si la balle atteint la fin du navigateur
        if (position.ball1 >= (windowWidth - getFullWidth(ball1))) {
            // ramener sa position a 0
            position.ball1 = -ball1.scrollWidth;
        }
        ball1.style.transform = "translateX( "+ position.ball1 + "px)"; 
        // appeler la fonction récursivement
        setTimeout(moveWidthSetTimeout, updateSpeed)
    };


    moveWidthSetInterval()
    setInterval(moveWidthSetInterval, updateSpeed)
    function moveWidthSetInterval(){
        position.ball2++;
        // si la balle atteint la fin du navigateur
        if (position.ball2 >= (windowWidth - getFullWidth(ball2))) {
            // ramener sa position a 0
            position.ball2 = -ball2.scrollWidth;
        }
        ball2.style.transform = "translateX("+ position.ball2 + "px)"; 
        // appeler la fonction récursivement
    };

    moveWidthRAF()
    function moveWidthRAF(){
         position.ball3++;
       // si la balle atteint la fin du navigateur
        if (position.ball3 >= (windowWidth - getFullWidth(ball3))) {
            // ramener sa position a 0
            position.ball3 = -ball3.scrollWidth;
        }
        ball3.style.transform = "translateX( "+ position.ball3 + "px)"; 
        // appeler la fonction récursivement
        requestAnimationFrame(moveWidthRAF)
    };

    moveWidthRAFf()
    function moveWidthRAFf(){
         position.ball4++;
        if (position.ball4*10 mousemove>= (windowWidth - getFullWidth(ball4))) {
            position.ball4 = -ball4.scrollWidth;
        }
        ball4.style.transform = "translateX( "+ position.ball4*10 + "px)"; 
        requestAnimationFrame(moveWidthRAFf)
    };
  





    function getFullWidth (element){

        // Récuperer les propriétés calculés de l'élément
        const styles = window.getComputedStyle(element)

        // Récupérer la largeur, la bordure, et le padding de l'élément
        const width = element.offsetWidth; 
        // console.log(width);

        const borderLeftWidth = parseFloat(styles.borderLeftWidth);
        const borderRightWidth = parseFloat(styles.borderRightWidth);
        const paddingLeft = parseFloat(styles.paddingLeft);
        const paddingRight = parseFloat(styles.paddingRight);

        //Calculate the full width including border andd padding
        const fullWidth = width + borderLeftWidth + borderRightWidth + paddingLeft + paddingRight;
        mousemove
        return fullWidth
    }
    
    
});











//  ball1.style.transform = "translateX("+(windowWidth - ball1.scrollWidth) +"px)"