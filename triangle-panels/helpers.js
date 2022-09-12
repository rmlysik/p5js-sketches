
function randomSelectTwo () {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

function getRandomColor(palette) {
  let index = floor(random(palette.length));
  return palette[index];
}