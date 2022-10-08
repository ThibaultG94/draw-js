const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
const outOfCanvas = document.querySelector(".container");
let currentColor = black;
let currentWidth = inputRange.value;

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
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentWidth;
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
  let index = 0;
  allColors.forEach((color) => {
    color.style.background = color.id;
    color.style.color = color.id;
    color.style.transition = `all 0.3s ease-in-out ${index}00ms`;
    index++;
  });
}

colorsAttribute();

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

color.addEventListener("click", () => {
  if (click) {
    allColors.forEach((color) => {
      color.style.height = "0";
      color.style.transition = "none";
    });
    colors.style.opacity = "0";
    click = false;
    setTimeout(() => {
      colors.style.display = "none";
    }, 1);
  } else {
    colors.style.display = "block";
    setTimeout(() => {
      colors.style.opacity = "1";
      allColors.forEach((color) => {
        color.style.height = "33px";
      }, 1);
    });
    click = true;
  }
});

allColors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor = color.id;
  });
});

inputRange.addEventListener("input", () => {
  currentWidth = inputRange.value;
});
