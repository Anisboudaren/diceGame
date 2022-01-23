document.addEventListener("DOMContentLoaded" , function loaded() {
    var img1 =  document.getElementById("img1");
var img2 = document.getElementsByClassName("img2")[0];
var text = document.getElementById("texty");

 var r1 = Math.floor(Math.random()*6+1);
 var r2 = Math.floor(Math.random()*6+1);

console.log(r1);
img1.src = "images/dice"+r1+".png";
 img2.src =  "images/dice"+r2+".png";

 if(r1>r2){
     text.textContent = "Player 1 has Won!"
 }else if(r2>r1){
     text.textContent = "Player 2 has Won!";
 }else {
     text.textContent = "Wow draw!";
 }
});
    

