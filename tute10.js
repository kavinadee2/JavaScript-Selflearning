//Discount Calulator

let quntity; 
let total;
let discount;
let amount;
let price;
//Acoustic Guitar discount

document.getElementById("btn1").onclick=function(){
    quntity = window.prompt(`Enter quntity`);
    total = quntity*15000
    window.alert(`total price:Rs.${total}`);
}
document.getElementById("btn2").onclick=function(){
    quntity = window.prompt(`Enter quntity`);
    total = quntity*65000
    window.alert(`total price: Rs.${total}`);
}
document.getElementById("btn3").onclick =function(){
    amount = window.prompt(`Enter Amount: `);
    discount =window.prompt('Enter discount you Get');
    price = amount-amount*(discount/100);
    price = window.alert(`After Discount Price: ${price}`);

}


