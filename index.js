
document.querySelector(".button").addEventListener("click", roll )

function roll(){
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var h1 = document.querySelector("h1");
  document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1 + ".png" );
  document.querySelector(".img2").setAttribute("src", "images/" + "dice" + randomNumber2 + ".png" );

  if (randomNumber1 > randomNumber2) {
    h1 = document.querySelector("h1").innerHTML = "🏆 Player 1 wins";

  }

  else if (randomNumber2 > randomNumber1) {
    h1 = document.querySelector("h1").innerHTML ="Player 2 wins 🏆";
  }

  else {
    h1 = document.querySelector("h1").innerHTML = "Draw";
  }

}
