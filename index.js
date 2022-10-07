const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.width = 100;
    this.height = 100;
  }
}

let y = 100;
const height = 100;
let bottom = y + 100;
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "red";
  c.fillRect(100, y, 100, height);

  if (bottom < canvas.height) {
    y++;
    bottom = y + 100;
  }

  console.log("animation running");
}

animate();
