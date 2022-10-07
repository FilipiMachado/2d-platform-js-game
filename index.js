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
    // move player to the left
    case "a":
      player.velocity.x = -4;
      break;
    // move player to the right
    case "d":
      player.velocity.x = 4;
      break;
    case "s":
      player.velocity.x = 0;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // move player to the left
    case "a":
      player.velocity.x = 0;
      break;
    // move player to the right
    case "d":
      player.velocity.x = 0;
      break;
  }
});
