const incre =document.getElementById("inc");
const decre =document.getElementById("dec");
const reset =document.getElementById("reset");
const numb =document.getElementById("num");

let count = 0;
incre.onclick=function(){
    count++;
    Number(count);
    
    numb.textContent= count;
    
}
decre.onclick=function(){
    count--;
    Number(count);
    
    numb.textContent= count;
    
}
reset.onclick=function(){
    count=0;
    Number(count);
    
    numb.textContent= count;
    
}