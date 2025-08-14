let Username;
//Username = window.prompt(`Enter Your Username:`);
//console.log(Username);
let age;
//age =window.prompt(`Enter your age:`);
//console.log(age);
document.getElementById("mysub").onclick =function(){
    let Username =document.getElementById("mytext").value;
    document.getElementById("myh").textContent= (`Hello ${Username}`);
    //console.log(Username);
    
}