
var num1=Math.random();
num1*=6;
var num2=Math.random();
num2*=6;
num1=Math.floor(num1)+1;
num2=Math.floor(num2)+1;
var text=document.querySelector("body .container h1");
var img1=document.querySelector(".container .dice .img1");
var img2=document.querySelector(".container .dice .img2");
var uppertext=document.querySelector(".container .dice p");
img1.setAttribute("src","images/dice"+num1+".png");
img2.setAttribute("src","images/dice"+num2+".png");
if (num1 < num2) {
    text.innerHTML = "Player 2 Wins!";
  } 
  else if (num1 > num2) {
    text.innerHTML = "Player 1 Wins!";
  }
  else {
    text.innerHTML = "It's a Draw!";
  }