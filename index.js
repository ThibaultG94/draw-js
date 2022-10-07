const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
const outOfCanvas = document.querySelector(".container");

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

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
