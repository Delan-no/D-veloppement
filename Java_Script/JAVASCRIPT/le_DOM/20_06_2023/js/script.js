/*

*/

/*
const header = document.querySelector(".header");
header.classList.add("class-b", "class-c")
header.classList.remove("container","class-a", "flex","class-b");
*/
//DOMContentLoaded

document.addEventListener("DOMContentLoaded",  function () {
    // les timers (minuteurs)
    // setTimeOut(fonction, temps-milliseconde)
    /*
    let timeoutId = setTimeout(function (){
       alert( "Bonjour ! Je suis Délanno ")
        
    }, 5000)
*/
// setInterval (fonction, temps-en- )
// let intervalId = setInterval(function(){
    //     counter++
    //     console.log(counter)
    // },1000)
    
    // console.log("timeoutId = " + timeoutId,
    // "intervalId = " + intervalId);
    
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let answer = document.getElementById("result");
    
    let counter = 0;
    let intervalId;

    startButton.style.background = "black";
    startButton.style.color = "white";
    startButton.style.padding = "1rem";
    startButton.style.margin = "2rem";
    
    stopButton.style.background = "black";
    stopButton.style.color = "white";
    stopButton.style.padding = "1rem";
    stopButton.style.margin = "2rem";

    answer.style.border = "2px solid red";
    answer.style.borderRadius = "50%";
    answer.style.width = "100px";
    answer.style.height = "100px";
    

    startButton.addEventListener("click", function (){
        intervalId = setInterval(function(){
            counter++;
            answer.innerHTML = counter;
            
        },1000)
    })

    stopButton.addEventListener("click", function(){
        clearInterval(intervalId)
    })
})
