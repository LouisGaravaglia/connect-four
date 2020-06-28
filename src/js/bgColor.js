var colors = [
  "#21537f",
  "#31537f",
  "#41537f",
  "#51537f",
  "#61537f",
  "#71537f",
  "#61537f",
  "#51537f",
  "#41537f",
  "#31537f",
  "#21537f",
  "#11537f",
];

var colors2 = [
  "#214185",
  "#314185",
  "#414185",
  "#514185",
  "#614185",
  "#714185",
  "#614185",
  "#514185",
  "#414185",
  "#314185",
  "#214185",
  "#114185",
];

var currentColor = 0;

const switchColor = () => {
  let homeBG = document.querySelector(".background");
  let topColumn = document.getElementById("column-top");

  if (currentColor >= colors.length) currentColor = 0;

  homeBG.style.background = colors[currentColor++];
  topColumn.style.background = colors2[currentColor++];

  setTimeout(switchColor, 4000);
};

switchColor();

export { switchColor };
