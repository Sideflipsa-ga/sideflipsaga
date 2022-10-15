function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

random_bg_color();

alert("Hi from the Sideflipsaga devs!");
console.log("%c Im bored -Side", "color: #879E5C; font-size: 11px");
