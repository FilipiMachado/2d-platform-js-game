const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
  player.update();

  //console.log("animation running");
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;

      break;
  }

  //console.log(e);
});
