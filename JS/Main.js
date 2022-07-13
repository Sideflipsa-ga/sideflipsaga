const colors = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
let timer = window.setInterval(changeColor, 1002);
function changeColor() {
  document.body.style.backgroundColor = colors;
}
