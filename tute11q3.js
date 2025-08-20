let mark1;
let mark2;
let mark3;
let total_mark;

mark1 = Number(window.prompt(`Enter Subject1 marks:`));
mark2 = Number(window.prompt(`Enter Subject2 marks:`));
mark3 = Number(window.prompt(`Enter Subject3 marks:`));


total_mark= mark1+mark2+mark3;

if (total_mark>=100){
    document.getElementById("myh1").textContent =`congratulation you are passed`;


}else{
    document.getElementById("myh1").textContent =`Sorry you are failed`;

}


