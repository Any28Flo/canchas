var botonFutbool=document.getElementById('botonFutbool');
botonFutbool.addEventListener("click",canchaFut);
var botonBasquet= document.getElementById("btnBasquet");
botonBasquet.addEventListener("click",canchaBasquet);



function canchaFut(){
var cancha= document.getElementById("soccer");
cancha.style.display="block";
var canchaTenis= document.getElementById("tenis");
canchaTenis.style.display="none";
}
function canchaBasquet(){
var cancha= document.getElementById("canchaBasket");
cancha.style.display="none";
}
