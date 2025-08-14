//Roll a Dice 🎲

const mybutton = document.getElementById("btn1");
const mylabel =document.getElementById("mylab");
let Random;

mybutton.onclick = function(){
    Random = Math.floor(Math.random()*6)+1;
    mylabel.textContent=Random;
     
}
