var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "./images/" + randomDiceImage1;
var randomImageSource2 = "./images/" + randomDiceImage2;

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource1);
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
//console.log(randomNumber1);
