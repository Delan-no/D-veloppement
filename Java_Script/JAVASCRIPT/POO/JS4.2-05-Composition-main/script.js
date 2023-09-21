import  {User}  from "./User.js";
import {Age} from "./User.js";
document.addEventListener("DOMContentLoaded", function(){
    let objAge = new Age (40)
    let myAge = new User("John", "Doe", "Pilote", objAge);
    console.log(myAge);
    console.log(myAge.age)

    




})