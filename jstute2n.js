//Q2

let Username;
let age;

document.getElementById("myb").onclick = function(){
    Username =window.prompt(`Enter your Username`);
    age = window.prompt(`Enter your age`);
    document.getElementById("p1").textContent= Username;
    document.getElementById("p2").textContent= age;
}
