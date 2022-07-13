colors = function randomHsl() {
  return "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
};
let timer = window.setInterval(changeColor, 1002);
function changeColor() {
  document.body.style.backgroundColor = colors;
}
