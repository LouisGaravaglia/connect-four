var colors = [
  "#f3d58b",
  "#f3d59b",
  "#f3d5ab",
  "#f3d5bb",
  "#f3d5cb",
  "#e3d5cb",
  "#d3d5cb",
  "#c3d5cb",
  "#b3d5cb",
  "#a3d5cb",
  "#93d5cb",
  "#83d5cb",
  "#73d5cb",
  "#83d5cb",
  "#93d5cb",
  "#a3d5cb",
  "#b3d5cb",
  "#c3d5cb",
  "#d3d5cb",
  "#e3d5cb",
  "#f3d5cb",
  "#f3d5bb",
  "#f3d5ab",
  "#f3d59b",
  "#f3d58b",
];

let galleryBG = document.querySelector(".background");

var currentColor = 0;
const switchColor = () => {
  let homeBG = document.querySelector(".background");

  if (currentColor >= colors.length) currentColor = 0;
  console.log(currentColor);

  // $(".background").css("background-color", colors[currentColor++]);
  homeBG.style.background = colors[currentColor++];
  console.log(homeBG);
  setTimeout(switchColor, 2000);
};

switchColor();

export { switchColor };
