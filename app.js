document.getElementById("range-t").addEventListener("input",change);    
function change() {
    document.getElementById("target").style.borderTopLeftRadius=document.getElementById("range-t").value + "%";
}
document.getElementById("range-r").addEventListener("input",changer);    
function changer() {
    document.getElementById("target").style.borderTopRightRadius=document.getElementById("range-r").value + "%";
}
document.getElementById("range-l").addEventListener("input",changel);    
function changel() {
    document.getElementById("target").style.borderBottomLeftRadius=document.getElementById("range-l").value + "%";
}
document.getElementById("range-b").addEventListener("input",changeb);    
function changeb() {
    document.getElementById("target").style.borderBottomRightRadius=document.getElementById("range-b").value + "%";
}