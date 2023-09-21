'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    button.addEventListener("click", function (event) {
        event.preventDefault();
        let i;
        let input = document.getElementById("input");
        let tab = [];
        tab.push(input);
        let span = document.querySelector("span")
        class Request {
      
            inputs (elements) {
                let input = document.querySelector("input")
                for ( i = 0; i < elements.length; i++) {
                    span.innerHTML = elements[i].value;
                              
                }

            }
        }

        
        let request = new Request();
        request.inputs(tab);

    })

})
