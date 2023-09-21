'use strict'
document.addEventListener("DOMContentLoaded", function () {
    
    class Request {
        getInputs(elements){
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i].value)               
            }
        }
        function () {
            const button = document.getElementById("button");
            button.addEventListener("click", function(event){
                event.preventDefault;
                let fname = document.getElementById("firstname");
                let lname = document.getElementById("lastname");
                let tapInput = [];
                tapInput.push(fname, lname);
                let request = new Request;
                request.getInputs(tapInput)

            })
        }
    }
    



})