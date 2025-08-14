
const submitbtn = document.getElementById("submitbtn");
const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const subresult = document.getElementById("subresult");
const paytresult = document.getElementById("payresult");

submitbtn.onclick = function(){
    //check if Subscribe
    if(mycheckbox.checked){
        subresult.textContent = `You are subscribed!`;
    }
    else{
        subresult.textContent = `you are not subscribed`;

    }
    //check payment method
    if(visabtn.checked){
        payresult.textContent ='you have selected visa payment method'
    }
    else if(masterbtn.checked){
        payresult.textContent ='you have selected master card payment method'
        
    }
    else if(paypalbtn.checked){
        payresult.textContent ='you have selected paypal payment method'
    }
    else{
        payresult.textContent ='you have not selected  payment method'
    }
}