
let ball = document.getElementById("ball");
let mode=document.querySelector('.mode');
ball.addEventListener("click", changeTheme);
let leftSide = true;
function changeTheme() {
  if (leftSide == true) {
    ball.style.left = "3.4rem";
    document.body.style.backgroundColor = "black";
    ball.style.backgroundColor = "black";
mode.style.backgroundColor = "white";
    leftSide = false;
  } else {
    ball.style.left = "0.2rem";
    document.body.style.backgroundColor = 'white';
    ball.style.backgroundColor = "white";
    mode.style.backgroundColor = 'black';
    leftSide = true;
  }
}