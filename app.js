// const even = document.getElementsByClassName("card__items");
// for (let i = 0; i < even.length; i++) {
//   even[i,1].style.backgroundColor = "red";
//   even[i,3].style.backgroundColor = "red";
// }

const even = document.getElementsByClassName("card__items");
even[0].style.backgroundColor = "blue"
even[2].style.backgroundColor = "blue"
even[4].style.backgroundColor = "blue"
even[6].style.backgroundColor = "blue"

function bigImg(x) {
  x.style.padding = "90px";
  x.style.fontSize = "52px";
  x.style.transform = "rotate(360deg)";
}

function normalImg(x) {
  x.style.padding = "70px";
}