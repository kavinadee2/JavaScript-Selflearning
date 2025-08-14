let num;
num = window.prompt(`Enter a number:`);
if (num==0){
    window.alert(`Number is Zero`);
}
else if (num<0){
    window.alert(`${num} is Negative Number`);
}
else{
    window.alert(`${num} is Positive Number`);
}