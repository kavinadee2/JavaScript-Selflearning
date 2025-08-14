let mark;
mark = window.prompt(`Enter your marks;`);

if(mark>=90){
    window.alert(`Grade = A`);
}
else if (mark<=89 && mark>=80){
    window.alert("Grade = B");
}
else if (70<=mark && mark<=79){
    window.alert("Grade = C")
}
else if (60<=mark && mark<=69){
    window.alert("Grade = D");
}
else{
    window.alert(`Fail! `);
}

