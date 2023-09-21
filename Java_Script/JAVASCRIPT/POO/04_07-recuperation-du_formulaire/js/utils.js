
import Request from "./request.js";

export function dealWithForm() {
const button = document.getElementById("button"); 
button.addEventListener("click", function (event){
    event.preventDefault();
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let tabInput = [];
    tabInput.push(firstname, lastname);
   
    let request = new Request();
    request.getInputs(tabInput);
})
}

