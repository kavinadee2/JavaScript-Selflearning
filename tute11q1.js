let age;
let registered;

age = window.prompt(`Enter you are age:`);


if (age>=18){
    registerd = window.prompt(`Enter you registerd for vote (yes/no)`);
    if (registered="yes"){
        window.alert(`you eligibel to vote`);
    }
    else{
        window.alert(`you not eligibel for vote`);
    }


}
else{
    window.alert(`you are ${age} is not eligibel for vote`);
}



