let Username;
document.getElementById("myb").onclick=function(){
    Username=document.getElementById("in1").value;
    document.getElementById("result").textContent= `Hello ${Username}`;
    
}