/*

*/

/*
const header = document.querySelector(".header");
header.classList.add("class-b", "class-c")
header.classList.remove("container","class-a", "flex","class-b");
*/
//DOMContentLoaded

document.addEventListener("DOMContentLoaded",  function () {
/*    
    const logoElement = document.getElementById("logo");

    const logoElement2 = document.querySelector("#logo")
    console.log({logoElement, logoElement2});

    const mainElement = document.querySelector('main.main');
    console.log(mainElement);

    const navlist = document.querySelectorAll("#logo");
    console.log(navlist);

    const name = "Délanno";
    window.alert("Bonjour " + name)

    const button1 = document.querySelector(".footer  button:first-of-type");
    const button2 = document.querySelector(".footer button:last-of-type");
    console.log(button1, button2);

    // ajoute un écouteur d'événement sur le bouton (click)
    button1.addEventListener("click", function(){
        console.log("vous avez appuyé sur le boutton 1");
    })
    button2.addEventListener("click", function(){
        console.log("vous avez appuyé sur le boutton 2");
    })
    // ajoute un écouteur d'événement sur le bouton (double click)
   button1.addEventListener("dblclick", function(){
        console.log("vous avez double cliqué le boutton 1");
    }) 
    button2.addEventListener("dblclick", function(){
        console.log("vous avez double cliqué le boutton 2");
    })

    const home = document.querySelector(".header ul li:first-child a");
    home.addEventListener("click", function (event){
        event.preventDefault()
        console.log("vous avez cliqué sur le home")
    })
*/
const butto = document.querySelector("form  button")
butto.addEventListener("click", function(ev){
    ev.preventDefault()
    console.log("vous avez soumis le formulaire");
})

const formElement = document.querySelector("form");
formElement.addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log("Validé")
})


})
