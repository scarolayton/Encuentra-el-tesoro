const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH),
};
let click = 0;
const info = document.getElementById("distance");
const map = document.getElementById("map").addEventListener("click", (e) => {
  click++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  info.innerHTML = distanceHint;
  if (distance < 30) {
    swal(
      "Busca del tesoro",
      `Encontraste el tesoro en ${click} clicks`,
      "success"
    );
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});
