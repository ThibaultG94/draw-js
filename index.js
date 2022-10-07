const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

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
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = "15";
}

// addEventListener -> canvas

// addEventListener -> reset
