//check age
let Age;

document.getElementById("myb").onclick =function(){
    Age = document.getElementById("inp1").value;

    //check age
    if(Age >=18){
        document.getElementById("myh3").textContent =`You are an Adult`;


    }
    else{
        document.getElementById("myh3").textContent =`You are a minor`;


    }
}