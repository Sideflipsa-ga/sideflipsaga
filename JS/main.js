function randomBgColor() {
  // Use array destructuring to generate random colors
  const [x, y, z] = [...Array(3)].map(() => Math.floor(Math.random() * 256));
  const bgColor = `rgb(${x}, ${y}, ${z})`;
  console.log(bgColor);

  document.body.style.background = bgColor;
}

randomBgColor();

alert("Hi from the Sideflipsaga devs!");
console.log("%c Im bored -Side", "color: #879E5C; font-size: 11px");
