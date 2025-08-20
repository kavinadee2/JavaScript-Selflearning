let length;
let breadth;
let area;

length = window.prompt(`Enter the length of the land (m):`);
breadth=window.prompt(`Enter the breadth of the land(m):`);

area = length*breadth;

if (area<=100){
    window.alert(`Land of area ${area}m^2  Price = $10000`);
}
else if(area>100 && area<200){
    window.alert(`Land of ${area}m^2 Price = $15000`);
}
else{
    window.alert(`Land ${area}m^2 Price = $20000`)
}
