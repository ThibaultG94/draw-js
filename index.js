const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

// Fonction mouseMove -> pour dessiner quand on bouge la souris

// addEventListener -> canvas

// addEventListener -> reset
