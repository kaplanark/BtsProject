//Up Button Function
var upButton = document.getElementById("upBtn");window.onscroll = function() {scrollFunction()};
function scrollFunction() {if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {upButton.style.display = "block";}else{upButton.style.display = "none";}}
function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}
//Up Button Function

//Firmalar Gruplama Butonları
document.getElementById("fb_1").onmouseover = function() {mouseOver_fb1()};
document.getElementById("fb_2").onmouseover = function() {mouseOver_fb2()};
function mouseOver_fb1(){
    document.getElementById("fb_1").click();
}
function mouseOver_fb2() {
    document.getElementById("fb_2").click();
}
//Firmalar Gruplama Butonları 