const getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

const getDistance = (e, target) => {
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;
  return Math.sqrt(diffx * diffx + diffy * diffy);
};

const getDistanceHint = (distance) => {
  if (distance < 40) {
    return "Hirviendo";
  } else if (distance < 60) {
    return "Muy caliente";
  } else if (distance < 100) {
    return "Caliente";
  } else if (distance < 180) {
    return "Calido";
  } else if (distance < 250) {
    return "Frio";
  } else if (distance < 290) {
    return "Muy frio";
  } else if (distance < 360) {
    return "Congelado";
  } else {
    return "Ya te moriste del frio";
  }
};
