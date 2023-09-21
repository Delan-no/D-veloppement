document.addEventListener("DOMContentLoaded",function(){
    let input = document.querySelectorAll("input");
    let form = document.querySelector("form");
/*
    class Animal {
        //  espece ;
        //  nbrDePattes;
        constructor(espece, nbrDePattes){
            console.log("appel du constructeur");
            this.espece = espece;
            this.nbrDePattes = nbrDePattes;
        }

        courir () {
            console.log(`${this.espece} court `)
        }
    }
    let chien = new Animal("chien", 4);
    chien.courir()
     // l'objet est une instance de la classe Animal
    // Quelle sera sur cette ligne  la valeur de l'objet chien?
    console.log(chien);
*/
    class request {
        getInputs(input){
            input.forEach((el)=> {
                console.log(el.value)
            })
        }
        
    }



    submi.addEventListener("click", (button) =>{
        button.preventDefault();
        let request = new Request();
        request.getInputs(input)
    })




});

