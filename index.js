const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
const outOfCanvas = document.querySelector(".container");

//--------
//  CANVAS
//--------

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "black";
  ctx.lineWidth = "10";
}

canvas.addEventListener("mousedown", (e) => {
  ctx.beginPath();
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

outOfCanvas.addEventListener("mousemove", (e) => {
  const mousePos = getMousePos(e);
  if (
    mousePos.x < 0 ||
    mousePos.x > canvas.width ||
    mousePos.y > canvas.height ||
    mousePos.y < 0
  ) {
    canvas.removeEventListener("mousemove", mouseMove);
  }
});

//--------
// BUTTONS
//--------
let click = false;
const allColors = document.querySelectorAll("li");

function colorsAttribute() {
  allColors.forEach((color) => {
    color.style.background = color.id;
    color.style.color = color.id;
  });
}

colorsAttribute();

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

color.addEventListener("click", () => {
  if (click) {
    colors.style.opacity = "0";
    // color.style.height = "0";
    click = false;
  } else {
    colors.style.opacity = "1";
    // color.style.height = "33px";
    click = true;
  }
});
