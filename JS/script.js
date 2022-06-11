const anim = document.getElementById("bg-image-sfei");
const btn_savoir_plus = document.getElementById("btn_savoir_plus");

window.addEventListener("load", animBgAccueil);

function animBgAccueil() {
  anim.classList.add("active");
}
console.log(btn_savoir_plus);

let tab = [0, 667, 1333];
let i = 0;
for (i = 0; i <= 2; i++) {
  let j = i + 1;

  let myTimeout = setTimeout(blinkArrows, tab[i]);

  function blinkArrows() {
    let arrow = document.getElementById(`arrow${j}`);
    arrow.classList.add("blink");
  }
}

