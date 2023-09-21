let x = 15;

{
    // let x = 20;
    console.log(x);

    {
        // let x = "bonjour";
        console.log(x);
    }
    console.log(x);
}


// Portée globable
let globaleVariable = 25
function foo1(){
     console.log(globaleVariable);
}
foo1();
 
// Portée locale
function foo2() {
    let localeVariable = 60 ;
    console.log(localeVariable)
}
foo2();
// Portée de bloc

function foo3() {
    if (true) {
        let blockVariable = 30;
        console.log(blockVariable);
    }
    
}
foo3();