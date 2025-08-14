//age comparing

const myinput =document.getElementById("myinput");

const mybutton =document.getElementById("myb");
const myh3 =document.getElementById("myh3");
let age;

mybutton.onclick=function(){
    age = myinput.value;
    if(age>=100){
        myh3.textContent=`your too much old`;

    }
    else if(age>=18){
        myh3.textContent =`your an adult`;



    }
    else if(age<=0){
        myh3.textContent=`your not born`
    }
    else{
        myh3.textContent=`you a child`;
    
    
    }
}