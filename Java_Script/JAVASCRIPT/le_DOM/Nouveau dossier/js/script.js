
document.addEventListener("DOMContentLoaded",  function () {
    const logo = document.getElementById("logo");
    console.log(logo.innerHTML);
    console.log(logo.innerText);
    console.log(logo.textContent);
    
    logo.innerHTML = "AchiDesign";
    logo.innerText = "Achi Design";
    logo.textContent = "Achi Design"
})
