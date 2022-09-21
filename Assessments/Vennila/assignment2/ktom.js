function getMiles(meters) {
    return meters*0.000621371192;
}
function getMeters(miles) {
    return miles*1609.344;
}
a=prompt("Choose the operation 1 for meters to miles and 2 for miles to meters");
if(a==1){
    b=prompt("Enter the miles");
    document.write(getMiles(b));
}
if(a==2){
    c=prompt("Enter the meters");
    document.write(getMeters(c));
}